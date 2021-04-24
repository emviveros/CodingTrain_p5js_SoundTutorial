let song;
let button;


function setup() {
  createCanvas(200,200);
  song = loadSound('bagulino.mp3', loaded);
  button = createButton('play');
  button.mousePressed(tooglePlaying);
  background(51);
}

