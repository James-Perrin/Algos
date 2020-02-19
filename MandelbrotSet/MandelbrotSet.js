let maxDepth = 20;
let limit = 16;

let wH1 = -1.25;
let wH2 = 1.25;

let wW1 = -2;
let wW2 = 0.5;

function setup() {
  createCanvas(4096,4096);
  pixelDensity(1);

  frDiv = createDiv('');
}

function draw() {
  loadPixels();
  for (var i = 0; i < width; i++) {
    for (var j = 0; j < height; j++) {

      let count = getIterations(i,j);

      let bright = count === maxDepth ? 0 : map(count, 0, maxDepth, 0, 1);
      bright = map(sqrt(bright), 0, 1, 0, 255);
      let pix = (i + j * width) * 4;
      pixels[pix + 0] = bright;
      pixels[pix + 1] = bright;
      pixels[pix + 2] = bright;
      pixels[pix + 3] = 255;
    }
  }
  updatePixels();
    frDiv.html(floor(frameRate()));
  noLoop();
    // wH1 += 0.01;
    // wH2 -= 0.02;
    //  wW1 += 0.01;
    //  wW2 -= 0.02;

  }

function getIterations(i, j) {
  let xi = map(i, 0, width, wW1, wW2);
  let yi = map(j, 0, height, wH1, wH2);
  let constX = xi;
  let constY = yi;
  let counter;

  for(counter=0; counter<=maxDepth; counter++) {
    let xf = xi*xi - yi*yi;
    let yf = 2 * xi*yi;
    xi = xf + constX;
    yi = yf + constY;
    if (xi*xi + yi*yi > limit || counter === maxDepth) {
      return counter;
    }
  }
}