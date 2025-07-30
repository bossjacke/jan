// var numOfButton = document.querySelectorAll(".akon").length;

// for (let i = 0; i < numOfButton; i++) {
//   document.querySelectorAll(".akon")[i].addEventListener("click", function () {
//     var song = this.innerHTML;
//      makesong(song);
//   })
// }
//   document.addEventListener("keydown", function(event){
//     console.log(event.key);
//     makesong(event.key);
// })

// function makesong(key){
//     switch (key) {
//       case "h":
//         var audio = new Audio("song/Akon_-_Hurt_Somebody_(Explicit)_(Official_Video)_ft._French_Montana(1).mp3");
//         audio.play();
//         break;

//       case "b":
//         var audio1 = new Audio("song/Akon_Beautiful_(Feat._Colby_O'donis_(1).mp3");
//         audio1.play();
//         break;

//       case "r":
//         var audio2 = new Audio("song/Akon_Right_Now_(Na_Na_Na).mp3");
//         audio2.play();
//         break;

//       default:
//         console.log(`Not found`)
//         break;
//     }
//   }







var numOfButton = document.querySelectorAll(".akon").length;

for (let i = 0; i < numOfButton; i++) {
  document.querySelectorAll(".akon")[i].addEventListener("click", function () {
    var song = this.innerHTML.toLowerCase(); // FIX 1
    makeSong(song);
  });
}
var song = null




document.addEventListener("keydown", function(event) {
  makeSong(event.key.toLowerCase()); // FIX 2
});

function makeSong(key) { 
  if (song) {
    song.pause()
    song.currentTime = 0

}


  switch (key) {
    case "h":
      var audio = new Audio("./song/Akon_-_Hurt_Somebody_(Explicit)_(Official_Video)_ft._French_Montana(1).mp3");
      audio.play();
      break;

    case "b":
      var audio1 = new Audio("./song/Akon_Beautiful_(Feat._Colby_O'donis_(1).mp3");
      audio1.play();
      break;

    case "r":
      var audio2 = new Audio("./song/Akon_Right_Now_(Na_Na_Na).mp3");
      audio2.play();
      break;

    default:
      console.log("Not found");
      break;
  }

  // If same song is already playing, stop it
  if (currentAudio && currentAudio.src.includes(audioSrc)) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  } else {
    // Stop any previously playing song
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // Play new song
    currentAudio = new Audio(audioSrc);
    currentAudio.play();
  }
}

