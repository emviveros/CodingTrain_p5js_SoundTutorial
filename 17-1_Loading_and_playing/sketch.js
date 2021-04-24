// erro no p5, verificar o que está acontecendo e ver se começa 
// a funcionar direito como play/pause ao invés de play/stop

let musica;
let playing;
let sliderVolume;
let sliderRate;
let sliderPan;
let button;

function setup() {
  createCanvas(200, 200);

  musica = loadSound("bagulino.mp3", loaded);
  button = createButton('play');
  button.mousePressed(tooglePlaying);

  sliderVolume = createSlider(0, 1, 0.5, 0.01);
  sliderRate = createSlider(0, 3, 1, 0.01);
  sliderPan = createSlider(-1, 1, 0, 0.01);

}

function loaded(){
  console.log('loaded');
}

function tooglePlaying(){
  if (!musica.isPlaying()) {
    musica.play();
    button.html('pause');
  } else {
    musica.pause();
    button.html('play');
  }
}

function draw() {
  background(0);
  musica.setVolume(sliderVolume.value());
  musica.pan(sliderPan.value());
  musica.rate(sliderRate.value());
}