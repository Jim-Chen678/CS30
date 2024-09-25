// State Variables
// Jim
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let currentColor = 0;  //0, 1 , 2
let circleSize = 50;
let growing = false;
let myColor;


function setup() {
  createCanvas(windowWidth, windowHeight);
  myColor = color(2006,0,0); //3-tuple
}

function draw() {
  background(225);

  switch(currentColor) {
    case 0:
      fill(255,100,100);    break;
    case 1:
      fill(myColor);   break;
    case 2:
      fill(1000,225,225); break;
  }

  //circle: change the color state (variable)
  if(frameCount % 10 ===0){
  currentColor ++;
  if(currentColor > 2) currentColor = 0;
  }

  //circle, grow/shrink
  if(growing) circleSize += 2;
  else circleSize -=2

  circle(width/2, height/2, circleSize);
}

function keyPressed(){

  if(key === "a"){
    growing = !growing;
  }
}