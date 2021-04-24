let musica;
let playing;
let sliderVolume;
let sliderRate;
let sliderPan;

function setup() {
  createCanvas(200, 200);

  musica = loadSound("bagulino.mp3", loaded);

  sliderVolume = createSlider(0, 1, 0.5, 0.01);
  sliderRate = createSlider(0, 3, 1, 0.01);
  sliderPan = createSlider(-1, 1, 0, 0.01);

  button = createButton('play/stop');
  button.mousePressed(toggle);

}
  
function loaded(){
  playing = true;
  musica.play();
}

function draw() {
  background(0);
  musica.setVolume(sliderVolume.value());
  musica.pan(sliderPan.value());
  musica.rate(sliderRate.value());
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