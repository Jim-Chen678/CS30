// circle
// 
//
//


function setup() {
  print("Setup runs once, at the start")
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(220)
  drawCircles();

}
function drawCircles(){

  fill(100,200,255)
  circle(90,60,50)

  fill(204,102,0)
  circle(360,60,50)

  fill(204,102,0)
  circle(225,130,50)
}