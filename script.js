var timer = "60";
var score = 0;


function makeBubbles() {
  var clutter = "";

  for (var i = 1; i <= 240; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.getElementById("pbtm").innerHTML = clutter;
}

function makeNewHit() {
  var rn = Math.floor(Math.random() * 10);
  document.getElementById("hitval").innerHTML = rn;
}

function runTimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.getElementById("timerval").innerHTML = timer;
    } else {
      clearInterval(timerint);
    }
  }, 1000);
}

function increaseScore() {
  score += 10;
  document.getElementById("scoreval").innerHTML = score;
}

makeBubbles();
makeNewHit();
runTimer();
increaseScore();
