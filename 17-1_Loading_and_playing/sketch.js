let musica;
let playing;
let slider;

function setup() {
  createCanvas(200, 200);

  musica = loadSound("bagulino.mp3", loaded);

  button = createButton('play/stop');
  button.mousePressed(toggle);

  slider = createSlider(0, 1, 0.5, 0.01);

}
  
function loaded(){
  playing = true;
  musica.play();
}

function draw() {
  background(0);
  musica.setVolume(slider.value());
}

function toggle(){
  if (!playing){
    playing = true;
    musica.play();
  } else{
    playing = false;
    musica.stop();
  }
}