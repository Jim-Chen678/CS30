// Drawing Loops
// Jim

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(2);
}

function draw() {
  myBackground();
  myForeground();
}

function myBackground(){
  //use some loop to draw a gradient background
  background(200);
}

function myForeground(){
  //use FOR / WHITE loops to draw on the canvas
  // loop var     confition   ;  var modification
  // x:  0  40  80  120
  for (let x = 0 ; x < mouseX ; x = x + 40){
    fill(0);
    circle(x, height/2, 40);
    fill(255);
    text(x, x,height/2);
  }


  // Draw some Starts
  let starCount = 0;
  fill(255,0,0); //red
  while(starCount < 100){
    let x = random(0, width)
    let y = random(0, height);
    circle(x,y,10);
    starCount++;
  }
}