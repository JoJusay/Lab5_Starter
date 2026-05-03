// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let audio_choice = document.getElementById("horn-select");
  let audio = document.querySelector("audio");
  let image = document.querySelector("img");
  let button = document.querySelector("button");
  let volume = document.getElementById("volume");
  let volume_img = document.querySelector("#volume-controls img");

  //Change sound of button
  audio_choice.addEventListener("change", function() {
    if (audio_choice.value == "air-horn") {
      audio.src = "assets/audio/air-horn.mp3";
    } else if (audio_choice.value == "car-horn") {
      audio.src = "assets/audio/car-horn.mp3";
    } else if (audio_choice.value == "party-horn") {
      audio.src = "assets/audio/party-horn.mp3";
    }
    console.log("audio changed to " + audio_choice.value);
  });

  //Change image
  audio_choice.addEventListener("change", function() {
    if (audio_choice.value == "air-horn") {
      image.src = "assets/images/air-horn.svg";
    } else if (audio_choice.value == "car-horn") {
      image.src = "assets/images/car-horn.svg";
    } else if (audio_choice.value == "party-horn") {
      image.src = "assets/images/party-horn.svg";
    }
    console.log("image changed to " + audio_choice.value);
  });

  //Play sound when button is clicked
  button.addEventListener("click", function() {
    audio.play();
    console.log("Played Audio");
  });

  //Change Volume
  volume.addEventListener("change", function() {
    audio.volume = volume.value * 0.01;
    console.log("Changed Volume");
  });

  //Change Volume Image
  volume.addEventListener("change", function() {
    let vol = parseInt(volume.value, 10);
    if (vol == 0) {
      volume_img.src = "assets/icons/volume-level-0.svg"; 
    } else if (vol < 33) {
      volume_img.src = "assets/icons/volume-level-1.svg";
    } else if (vol >= 33 && vol < 67) {
      volume_img.src = "assets/icons/volume-level-2.svg";
    } else {
      volume_img.src = "assets/icons/volume-level-3.svg";
    }
    console.log("Changed Volume Image");
  });
}