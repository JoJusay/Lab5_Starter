// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let audio_choice = document.getElementById("horn-select");
  let audio = document.querySelector("audio");
  let image = document.querySelector("#volume-controls img");

  //Change sound of 
  audio_choice.addEventListener("change sound", function() {
    if (audio_choice.value == "air-horn") {
      audio.src = "assets/audio/air-horn.mp3";
    } else if (audio_choice.value == "car-horn") {
      audio.src = "assets/audio/car-horn.mp3";
    } else if (audio_choice.value == "party-horn") {
      audio.src = "assets/audio/party-horn.mp3";
    }
    console.log("audio changed to " + audio_choice.value);
  });

  audio_choice.addEventListener("change image", function() {
    if (audio_choice.value == "air-horn") {
      audio.src = "assets/images/air-horn.svg";
    } else if (audio_choice.value == "car-horn") {
      audio.src = "assets/images/car-horn.svg";
    } else if (audio_choice.value == "party-horn") {
      audio.src = "assets/images/party-horn.svg";
    }
    console.log("image changed to " + audio_choice.value);
  });
}