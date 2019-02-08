// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  ellipse(mouseX, mouseY, 25, 25);
  print(mouseX)
}

function mousePressed(){
  fill(255, 0, 0);

}
funtion mouseReleased(){
  fill(0, 255, 0);
}

