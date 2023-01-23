let drawCircle;

function setup() {
    createCanvas(windowWidth, windowHeight);
 }

function draw() {
  if(mouseIsPressed) {
    ellipse(mouseX, mouseY, 80, 80)
    fill(255)
  }
}
 
function mouseIsPressed() {
  drawCircle = !drawCircle;
  console.log("click");
}