function setup() {
  print("Setup runs once, at the start");
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawCircles(mouseX, mouseY); // Pass mouse coordinates to drawCircles
}

function drawCircles(x, y) {
  // People person
  fill(239, 238, 225);
  circle(x, y, 25); // Head

  line(x, y + 13, x, y + 40); // Body
  line(x, y + 40, x - 30, y + 70); // Left leg
  line(x, y + 40, x + 30, y + 70); // Right leg
  line(x - 20, y + 30, x + 20, y + 30); // Arms

    // Draw the burger
    drawBurger(200, 505);
  }

  function drawBurger(x, y) {


  
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
