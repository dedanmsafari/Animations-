let canvas = document.getElementById("animated-canvas");
let context = canvas.getContext("2d");
let canvasInterval = requestAnimationFrame(canvasAnimation);
let circlex = 60;
let velocity = 1;
let acceleration = 0.5;

let posY = canvas.height / 2;

function canvasAnimation() {
  circlex++;
  drawCircle(circlex, posY, 25);
  canvasInterval = requestAnimationFrame(canvasAnimation);
}

function drawCircle(x, y, s) {
 // clearCanvas();
 context.globalCompositeOperation = 'screen'
  context.fillStyle = "crimson";
  context.beginPath();
  context.arc(x, y, s, 0, 2 * Math.PI);
  context.fill();
  velocity += acceleration;
  circlex += velocity;
  if (circlex > canvas.width) {
    velocity = makeRandom(3);
    circlex = makeRandom(canvas.width);
    posY = makeRandom(canvas.height);
  }
}

function clearCanvas() {
  context.clearRect(0, 0, canvas.clientWidth, canvas.height);
}
function makeRandom(n) {
  return Math.floor(Math.random() * Math.floor(n));
}

drawCircle();

