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
  

  // buiger
  fill(237,128,14)
  arc(200, 505, 70, 70, PI, 2*PI)

  fill(173,14,14)
  ellipse(200,510,70,10)

  fill(41,12,12)
  quad(165,515,235,515,235,530,165,530)

  fill(17,202,21)
  quad(165,535,235,535,235,540,165,540)
  
  fill(237,128,14)
  quad(165,545,235,545,235,560,165,560)

  
}
