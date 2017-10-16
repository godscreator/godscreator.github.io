var circleX;
function setup() {
    createCanvas(1000,600);
    circleX = 200;
}

function draw() {
    background(255,0,0);
    ellipse(circleX,200,50,50);
    circleX += 1;   
}