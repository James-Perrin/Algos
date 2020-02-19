let factor = 4;
let prev = 0;
let pi = 1 * 4;
let j = 0;

function setup() {
    createCanvas(600,600);
    divPI = createDiv('').style('font-size', '64pt'); 
    divJ = createDiv('').style('font-size', '48pt'); }

function draw() {
    Gregory_Leibniz(j);
    if(prev !== pi){
        divPI.html(pi);    
        divJ.html("steps: " + j);    
        j++;
    } else {
        noLoop();
    }
    prev = pi; 
}

function Gregory_Leibniz (j) {
    let num = j*2+3;
    pi += (j%2) === 0 ? -1*factor/num : 1*factor/num;
}   