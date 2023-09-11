var clutter = "";

for (var i = 1; i <= 240; i++) {
  var rn = Math.floor(Math.random() * 10);
  clutter += `<div class="bubble">${rn}</div>`;
}

document.getElementById("pbtm").innerHTML = clutter;
