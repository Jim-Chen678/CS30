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

  fill(500,200,500)
  circle(500,300,250)

  fill(500,200,500)
  square(375,300,250)

  fill(500,200,500)
  rect(375,550,80)

  fill(500,200,500)
  rect(545,550,80)
}
