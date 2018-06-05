var one = ["hi", "you", "nice"];


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,0,0);
  noStroke();
}

function draw() {
  createCanvas(windowWidth, windowHeight);
  background(255,0,0);
  fill(255,50,150);
  ellipse(width/2,height/2, 250, 250);
  fill(255,50,200);
  ellipse(width/2,height/2, 200, 200);
  fill(255,150,200);
  ellipse(width/2,height/2, 150, 150);
  fill(255,200,0);
  ellipse(width/2, height/2, 100,100);
  fill(255,150,0);
  ellipse(width/2,height/2,50,50);
}
