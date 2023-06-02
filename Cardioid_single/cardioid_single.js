const CIRCLE_DIAMETER = 1000;
const r = CIRCLE_DIAMETER / 2;

const hieght = 1.25*CIRCLE_DIAMETER;
const width = 1.25*CIRCLE_DIAMETER;

let scaler = 1;
let factor = 710*scaler;
let base = 1000*scaler;

function setup() {
  createCanvas(width, hieght);
  background(0,0,0);
  stroke(255,255,255);
  strokeWeight(1*(1250/base));
  noFill();
}

function setStrokeColor(dec) {
  // magRange : 0 ... 250000
  // max : 16777215
  let decimalColor = (dec/(250000*1))*(16777215/1);
  var red = (decimalColor >> 16) & 255;
  var green = (decimalColor >> 8) & 255;
  var blue = decimalColor & 255;
  stroke(red, green, blue);
}

function getVector(index, base) {
  const angle = map(index % base, 0, base, 0, TWO_PI);
  const v = p5.Vector.fromAngle(angle + PI);
  v.mult(r);
  setStrokeColor((v.x * v.x) + (v.y + v.y));
  return v;
}

function draw() {
  translate(hieght/2, width/2);
  ellipse(0, 0, r * 2);
  for (let i = 0; i <= base; i++) {
    const a = getVector(i, base);
    const b = getVector(i * factor, base);
    line(a.x, a.y, b.x, b.y);
  }
  stroke(255,255,255);
  strokeWeight(2);
  textSize(50);
  fill(255);
  text("b:f | " + base.toFixed(2) + " : " + factor.toFixed(2), -r-75, -r-20);
  text("b/f | " + (base / factor).toFixed(5), r-(width*0.25), -r-20);
  noLoop();
}