let pi = 1;
let j = 0;
let num = 2;
let val, prev = 0;
let elem;
let divPI, divJ;

function setup() {
    createCanvas(600,600);
    divPI = createDiv('').style('font-size', '64pt'); 
    divJ = createDiv('').style('font-size', '48pt'); 

}

function draw() {
    Viète(j);
    console.log(prev + "-->" +pi);
    if(prev !== pi){
        divPI.html(pi);    
        divJ.html("steps: " + j);    
        j++;
    } else {
        noLoop();
    }
    prev = pi;   
}

function Viète (j) {   
    val = sqrt(num);
    pi = val; 
    for(let i=0; i<j; i++){ 
        val = sqrt(num + val);
        pi *= val;
    }
    pi *= Math.pow(num,-(j+1))
    pi = Math.pow(pi,-1) * num;
}   