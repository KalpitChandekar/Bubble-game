var timer = "6";
var score = 0;
var hitrn = 0;

function makeBubbles() {
  var clutter = "";

  for (var i = 1; i <= 240; i++) {
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
      gameOverElement.textContent = "Game Over"; 
      gameOverElement.style.fontSize = "80px";
      gameOverElement.style.color = "rgb(15, 73, 15)";
      gameOverElement.style.paddingTop = "50px"; 
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
