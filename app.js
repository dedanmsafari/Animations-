let ol = 0;
let tp = 20;
let sc = 50;
let isPlaying = false;
let circleInterval;
const el = document.getElementById("circle");

function circleAnimation(time) {
  ol++;

  el.style.left = ol + "px";
  if (time >= 4000) {
    sc++;
    el.style.backgroundColor = "red";
    el.style.height = sc + "px";
    el.style.width = sc + "px";
    el.style.borderRadius = sc + "px";
  }
  if (time >= 7000) {
    tp++;
    el.style.left = 241 + "px";
    el.style.backgroundColor = "green";
    el.style.top = tp + "px";
    el.style.borderRadius = "0px";
  }
  circleInterval = requestAnimationFrame(circleAnimation);
}

function mouseClicked() {
  if (isPlaying) {
    isPlaying = false;
    el.style.backgroundColor = "grey";
    cancelAnimationFrame(circleInterval);
  } else {
    isPlaying = true;
    el.style.backgroundColor = "green";
    circleInterval = requestAnimationFrame(circleAnimation);
  }
}

el.addEventListener("click", mouseClicked);
