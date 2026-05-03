// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  let voices = [];
  let voiceSelect = document.getElementById("voice-select");
  let text = document.getElementById("text-to-speak");
  let button = document.querySelector("button");
  let picture = document.querySelector("img");

  //Fill In Voice Options
  function populateVoices () {
    voices = synth.getVoices();

    for (const voice of voices) {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;

      option.setAttribute("data-lang", voice.lang);
      option.setAttribute("data-name", voice.name);
      voiceSelect.appendChild(option);
    }
    console.log("Populated voices");
  }

  populateVoices();

  if(speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
  }

  //Play Voice
  button.addEventListener("click", function() {
    //Get what is going to be spoken
    const utterThis = new SpeechSynthesisUtterance(text.value);

    //Set Voice
    for (const voice of voices) {
      if (voice.name === voiceSelect.value) {
        utterThis.voice = voice;
      }
    }

    //Change Image
    utterThis.onstart = () => {picture.src = "assets/images/smiling-open.png";};

    //Speak
    synth.speak(utterThis);

    //Change Image
    utterThis.onend = () => {picture.src = "assets/images/smiling.png";};
  });
}