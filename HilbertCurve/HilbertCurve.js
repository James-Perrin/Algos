let order = 1;
let N;
let total;
let speed = 1;
let path = [];
let counter = 0;
let wait = false;
let colour = [];

function setup() {
  colorMode(HSB, 360, 255, 255);
  setColours();
  start();
}

function setColours() {
  for(let j=0; j<360; j++){
    colour.push(map(j, 0, 360, 0, 360));
  }
}

function start() {
  createCanvas(1024, 1024);
  background(0);
  path = [];
  N = int(pow(2,order));  
  total = N * N;
  let len;

  for (let i = 0; i < total; i++) {
    path[i] = hilbert(i);
    len = width / N;
    path[i].mult( len );
    path[i].add( len/2 , len/2 );
  } 
}

function draw() {
  //console.log(counter);
  stroke(255);
  strokeWeight(1);
  noFill();

  for (let i = 1; i < counter; i++) {
    let h = colour[Math.floor(360 * (i/path.length))];
    stroke(h, 255, 255);
    line(path[i].x, path[i].y, path[i - 1].x, path[i - 1].y);
  }

  switch (counter) {
    case -1:
      return;
    case path.length:
      counter = -1;
      break;
    case counter + speed > path.length:
      counter = path.length;
      break;
    default:
      counter += speed;
      break;
  }
  if (counter === -1) {
    if (!wait) {
      setTimeout(() => {
        seeOrder();
      }, 3000);
    }
    wait = true;
  }
}

function seeOrder() {
  wait = false;
  counter = 0;
  order = order == 9 ? 0 : order++;
  order ++;
  speed = pow(2,order);
  start();
}

function last2bits(x) { return (x & 3); }

function hilbert(i) {
  const positions = [
    new p5.Vector(0, 0),
    new p5.Vector(0, 1),
    new p5.Vector(1, 1),
    new p5.Vector(1, 0)
  ];
  
  let index = last2bits(i);
  let v = positions[index];
  let len;

  for (let j = 1; j < order; j++) {
    i = i >>> 2;
    index = last2bits(i);
    let len = pow(2, j);
    switch (index) {
      case 0:
        temp = v.x;
        v.x = v.y;
        v.y = temp;
        break;
      case 1:
        v.y += len;
        break;
      case 2:
        v.x += len;
        v.y += len;
        break;
      case 3:
        temp = len - 1 - v.x;
        v.x = len - 1 - v.y;
        v.y = temp;
        v.x += len;
        break;
    }
  }
  return v;
}