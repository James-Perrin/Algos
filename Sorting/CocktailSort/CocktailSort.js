let arr = [];
let x = 0;

function setup () {
    createCanvas(900-100, 900-100);
    arr = new Array(width);
    for(let x=0; x<width+1; x++) {
        arr[x] = random(height);
    }
}

function draw () {
    background(0);
    stroke(255);
    if (x%2 == 0) {
        cocktail_down_Iteration();
    } else if (x%2 == 1) {
        cocktail_up_Iteration();
    }
    x++;
    for (let x = 0; x < arr.length; x++) {
        stroke(255);
        line(x, height, x, height - arr[x]);
      }
}

function cocktail_down_Iteration() {
    if(x < arr.length){
        for(let y=0; y<arr.length-1; y++) {
            if(arr[y] > arr[y+1]) {
                swap(arr, y, y + 1);
            }
        }
    }
}

function cocktail_up_Iteration() {
    if(x < arr.length){
        for(let y=arr.length-1; y>0; y--) {
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