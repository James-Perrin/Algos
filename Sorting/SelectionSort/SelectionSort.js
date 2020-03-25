let arr = [];
let min_index;
let temp;   
let i = 0;
let num;
let bool = true;

function setup () {
    createCanvas(900-100, 900-100);
    arr = new Array(width);
    for(let i=0; i<width+1; i++) {
        arr[i] = random(height);
    }
}

function draw () {
    background(0);
    stroke(255);
    selectionIteration();
    i++;
    for (let x = 0; x < arr.length; x++) {
        stroke(255);
        line(x, height, x, height - arr[x]);
    }
    if(keyCode === LEFT_ARROW){
        if(!bool){
            loop();
        } else if(bool){
            console.log('DEBUG');
            noLoop();
        }
        bool = !bool;
    }
}

function selectionIteration() {
    min_index = 0;
    num = arr[i];
    if(i < arr.length){
        for(let j=i; j<arr.length; j++) {
            if (arr[j] <= num) {
                min_index = j;
                num = arr[j];                
            }
        }
        swap(arr, i, min_index);
    }
}

function swap(arr, x, y) {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}