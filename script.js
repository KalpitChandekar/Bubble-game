function makeBubbles() {
  var clutter = "";

  for (var i = 1; i <= 240; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.getElementById("pbtm").innerHTML = clutter;
}

var timer = "60";

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


makeNewHit();
runTimer();
makeBubbles();
