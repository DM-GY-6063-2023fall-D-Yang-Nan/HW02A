let width = 1000;
let height = 1000;
let triangleShortWidth = 450;
let triangleLongWidth = 700;

function setup() {
    createCanvas(width,height);

}

function draw() {
    background(0);


    translate(0,300);
    stroke(0);
    fill(250,235,215);
    triangle(0,0,0,700,triangleShortWidth,0);
    triangle(297,240,0,700,1000,700);

    translate(1000,400);
    rotate(radians(180));
    stroke(0);
    fill(250,235,215);
    triangle(0,0,0,700,triangleShortWidth,0);
    triangle(297,240,0,700,1000,700);


}
