// MouseWheel, Map, Lerp
// Jim
let x, y, d=50;


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  x = width/2;   y = height/2;
  noFill();
}

function draw() {
  //move the circle
  x = lerp(x, mouseX, 0.15);
  y = lerp(y, mouseY, 0.15);

  let r = map(x, 0, width, 0, 225);
  let g = map(x, 0, height, 0, 225);
  let b = map(x, 0, width, 225, 0);

  stroke(r,g,b);
  circle(x,y,d);
}

function mouseWheel(event){
  print(event.delta);
  if(event.delta > 0){
    d -= 10;
  }
  else{
    d += 10;
  }
}