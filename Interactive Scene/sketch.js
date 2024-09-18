function setup() {
  print("Setup runs once, at the start")
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(220)
  drawCircles();

}
function drawCircles(){

  fill(239, 238, 225)
  circle(50, 50, 25)

  line(50,63,50,100)

  line(50,100,20,130)

  line(50,100,80,130)

  line(20,80,80,80)
  

  // Top-left.
  arc(400, 55, 70, 70, PI, 2*PI)



  
}
