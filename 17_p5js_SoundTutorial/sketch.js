// tracking error github:
// https://github.com/processing/p5.js-sound/issues/506

//função currentTime() não funciona

let song;
let button;
let jumpButton;

function setup() {
  createCanvas(200,200);
  song = loadSound('bagulino.mp3', loaded);
  
  button = createButton('play');
  button.mousePressed(tooglePlaying);

  jumpButton = createButton('jump');
  jumpButton.mousePressed(jumpSong);

  background(51);
}

function jumpSong() {
  let len = song.duration();
  song.jump(len / 2);
}

function loaded() {
  console.log("loaded");
}
 
function tooglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.3);
    button.html('stop')
  } else {
    song.stop();
    button.html('play')
  }
}

function draw() {
  //console.log(song.currentTime());
  if (song.currentTime() > 5) {
    background(255,0,255);
  }
}