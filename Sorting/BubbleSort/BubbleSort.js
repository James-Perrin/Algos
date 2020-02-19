let arr = [];
let x = 0;

function setup () {
    createCanvas(windowWidth-100, windowHeight-100);
    arr = new Array(width);
    for(let x=0; x<width; x++) {
        arr[x] = random(height);
    }
}

function draw () {
    background(0);
    stroke(255);
    bubbleIteration();
    x++;
    for (let x = 0; x < arr.length; x++) {
        stroke(255);
        line(x, height, x, height - arr[x]);
      }
}

function bubbleIteration() {
    if(x < arr.length){
        for(let y=0; y<arr.length-1; y++) {
            if(arr[y] > arr[y+1]) {
                swap(arr, y, y + 1);
            }
        }
    }
}

function swap(arr, x, y) {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}