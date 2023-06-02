const CIRCLE_DIAMETER = 125;
const r = CIRCLE_DIAMETER / 2;

const minBase = 0;
const finalBase = 50;

const minFactor = 0;
const finalFactor = finalBase;

const hieght = 1.10 * (finalBase - minBase) * CIRCLE_DIAMETER + 2*CIRCLE_DIAMETER;
const width = 1.10 * (finalFactor - minFactor) * CIRCLE_DIAMETER + 2*CIRCLE_DIAMETER;

let factor = minFactor;
let base = minBase;

function setup() {
  createCanvas(width, hieght);
  background(0);
  stroke(255, 255, 255);
  strokeWeight(1);
  noFill();
}

function getVector(index, base) {
  const angle = map(index % base, 0, base, 0, TWO_PI);
  const v = p5.Vector.fromAngle(angle + PI);
  v.mult(r);
  return v;
}

function draw() {
  if (factor <= base) {
    translate(CIRCLE_DIAMETER + (factor-minFactor) * 1.10 * CIRCLE_DIAMETER, CIRCLE_DIAMETER + (base-minBase) * 1.10 *  CIRCLE_DIAMETER);
    ellipse(0, 0, r * 2);
    for (let i = 0; i <= base; i++) {
      const a = getVector(i, base);
      const b = getVector(i * factor, base);
      line(a.x, a.y, b.x, b.y);
    }
    text((factor/base).toFixed(2) , -r-5, -r-5);
    increaseFactor();
  } else if (factor > base) {
    increaseBase();  
  }
  factor = Math.round(factor * 100) / 100;
  if (base > finalBase) {
    noLoop();
  }
}

function decreaseFactor() {
  factor += -1;
}

function increaseFactor() {
  factor += 1;
}

function decreaseBase() {
  base += -1;
  factor = minFactor;
}

function increaseBase() {
  base += 1;
  factor = minFactor;
}