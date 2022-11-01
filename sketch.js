let osc;
//let button;
let osc2;
let osc3;
//let sketchStarted = false;
var started;

function setup() {

 /* button = createButton("Start");
  button.mousePressed(() => sketchStarted = true);*/

  var canvas = createCanvas(800, 800);
  canvas.parent('sketch-container');

  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(220);
  osc.amp(0.5);
  osc.start();


  osc2 = new p5.Oscillator();
  osc2.setType('sawtooth');
  osc2.freq(220);
  osc2.amp(0.5);
  osc2.start();

  osc3 = new p5.Oscillator();
  osc3.setType('triangle');
  osc3.freq(220);
  osc3.amp(0.5);
  osc3.start();
}

function draw() {

  fill(0, 10);
  rect(0, 0, width, height);
  background(220);

  osc.freq(map(mouseX, 0, width, 80, 1000));
  osc.amp(map(mouseY, 0, height, 0.1, 1));

  osc2.freq(map(mouseY, 0, width, 80, 1000));
  osc2.amp(map(mouseX, 0, height, 0.1, 1));

  osc3.freq(map(-mouseX, 0, width, 80, 1000));
  osc3.amp(map(mouseY, 0, height, 0.1, 0));


  var radius = height * 0.4;
  var i = cos(radians(-mouseX)) * radius;
  var j = sin(radians(-mouseY)) * radius;

  var m = cos(radians(mouseX)) * radius;
  var n = sin(radians(mouseY)) * radius;


  translate(width /2, width / 2, 250);
  stroke(random(0, 255), random(0, 255), random(0, 255));

  for (let i = 0; i < 100; i++) {
    ellipse(j + 150, 30, m+ 30, mouseY);
    rotate(PI / 8);
  }
}

function touchStarted() {
  getAudioContext().resume();
}
