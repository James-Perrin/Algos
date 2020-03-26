let arr = [];
let min_index;
let temp;   
let i = 1;
let j = 0;
let num;
let bool = true;

function setup () {
    createCanvas(700, 400);
    arr = new Array(width);
    for(let i=0; i<width+1; i++) {
        arr[i] = random(height);
    }
}

function draw () {
    background(0);
    stroke(255);
    insertionIteration();
    for (let x = 0; x < arr.length; x++) {
        stroke(255);
        line(x, height, x, height - arr[x]);
    }
    i++;
}

function insertionIteration() {
    min_index = 0;
    j = i - 1;
    num = arr[i];
    if(i < arr.length){
        while(j >= 0 && arr[j] > num) {
            arr[j+1] = arr[j];
            j = j- 1;
        }
        arr[j+1] = num;
        
    }
}