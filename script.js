var timer = "30";
var score = 0;
var hitrn = 0;

function makeBubbles() {
  const pbtm = document.getElementById("pbtm");
  console.log(pbtm.clientWidth);
  var clutter = "";
  let bubbles;
  if (pbtm.clientWidth <= 500) {
    bubbles = 77;
  } else {
    bubbles = 240;
  }

  for (var i = 1; i <= bubbles; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.getElementById("pbtm").innerHTML = clutter;
}

function makeNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.getElementById("hitval").innerHTML = hitrn;
}

function runTimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.getElementById("timerval").innerHTML = timer;
    } else {
      clearInterval(timerint);
      var gameOverElement = document.createElement("h1");
      gameOverElement.textContent = "Game Over 🚩 ";
      gameOverElement.id = "gameOver";
      document.getElementById("pbtm").innerHTML = "";
      document.getElementById("pbtm").appendChild(gameOverElement);
    }
  }, 1000);
}

function increaseScore() {
  score += 10;
  document.getElementById("scoreval").innerHTML = score;
}

document.getElementById("pbtm").addEventListener("click", function (e) {
  var clickedNum = Number(e.target.innerHTML);
  if (clickedNum === hitrn) {
    increaseScore();
    makeNewHit();
    makeBubbles();
  }
});

makeBubbles();
makeNewHit();
runTimer();
