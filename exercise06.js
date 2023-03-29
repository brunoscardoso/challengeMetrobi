const canvasWidth = 800;
const canvasHeight = 400;
const achillesSpeed = 4;
const tortoiseSpeed = 2;
const startDistance = 200;
const finishLine = canvasWidth - 50;

let achillesPos;
let tortoisePos;
let deltaTime;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  achillesPos = startDistance;
  tortoisePos = startDistance;
}

function draw() {
  background(255);

  stroke(0);
  line(finishLine, 0, finishLine, canvasHeight);

  deltaTime = millis() / 1000;
  achillesPos += achillesSpeed * deltaTime;
  tortoisePos += tortoiseSpeed * deltaTime;

  stroke(0);
  fill(0, 0, 255);
  ellipse(achillesPos, canvasHeight / 2, 20, 20);
  fill(255, 0, 0);
  ellipse(tortoisePos, canvasHeight / 2 + 50, 20, 20);

  if (achillesPos >= finishLine) {
    noLoop();
    textSize(32);
    fill(0);
    text("Achilles wins!", 50, canvasHeight / 2);
  }

  if (tortoisePos >= finishLine) {
    noLoop();
    textSize(32);
    fill(0);
    text("Tortoise wins!", 50, canvasHeight / 2);
  }
}

setup();

draw();
