function setup() {
  print("Setup runs once, at the start");
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  people(mouseX, mouseY); // Pass mouse coordinates to drawCircles
}
function isTouchingBurger(x,y){
noFill()
let personCircle=80
let burgerCircle=80
circle(x,y,personCircle)
circle(200,520,burgerCircle)
print(dist(x,y,200,520), personCircle+burgerCircle/100)
if(dist(x,y,200,520) < personCircle+burgerCircle/100){
  return true;

}
else return false;
}


function people(x, y) {
  // People person
  fill(239, 238, 225);
  circle(x, y, 25); // Head

  line(x, y + 13, x, y + 40); // Body
  
  if (isTouchingBurger(x, y+30)) {
    // If touching, draw the body as a circle
    fill(239, 238, 225)
    circle(x, y + 25, 40); 
    
  } else {
  
    line(x, y + 13, x, y + 40); // Body
   

  }

  line(x, y + 40, x - 30, y + 70); // Left leg
  line(x, y + 40, x + 30, y + 70); // Right leg
  line(x - 20, y + 20, x + 20, y + 20); // Arms


  burger();

  }

  function burger() {


  
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