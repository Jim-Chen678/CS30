// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let squareX=0, squareY=0;
let squareSize = 50;
let speed = 5;
let direction = "right";

function setup() {
  createCanvas(800, 600);

}



function draw() {
  background(255);



  if (direction === 'up') {
    squareY -= speed;
  } else if (direction === 'down') {
    squareY += speed;
  } else if (direction === 'left') {
    squareX -= speed;
  } else if (direction === 'right') {
    squareX += speed;
  }
  squareX = constrain(squareX, 0, width - squareSize);
  squareY = constrain(squareY, 0, height - squareSize);
  
  //change the state?
  if(direction==="right" && squareX > 700)
    direction = "down";
  if(direction==="down" && squareY > 500)
    direction = "left"
  if(direction==="left" && squareX < 100)
    direction = "up"
  if(direction==="up")
  // Draw the square

  rect(squareX, squareY, squareSize, squareSize);
}


  

