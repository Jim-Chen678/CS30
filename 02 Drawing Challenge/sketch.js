


let rX = 50;      let rY = 50;

function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER); //CORNER
}

function draw() {
    background(220)
    //moving rectangle
    if(keyIsPressed  && key==="a"){
        //good to use in draw() when we want to detect nutton beging held
        
        rY += 2;
        if(rY > height) rY = 0;
    }
    rect(rX, rY, 50, 100);
}