// Fullscreen on / off

function goFullScreen() {
  var elem = document.getElementById("forFullScreen");
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
    elem.getElementById("forFullScreen").onclick = exitFullScreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
    elem.getElementById("forFullScreen").onclick = exitFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
    elem.getElementById("forFullScreen").onclick = exitFullScreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
    elem.getElementById("forFullScreen").onclick = exitFullScreen();
  }
}
function exitFullScreen() {
  var elem = document.getElementById("forFullScreen");
  if (elem.exitFullscreen) {
    elem.exitFullscreen();
    elem.getElementById("forFullScreen").onclick = goFullScreen();
  } else if (elem.mozCancelFullScreen) {
    elem.mozCancelFullScreen();
    elem.getElementById("forFullScreen").onclick = goFullScreen();
  } else if (elem.webkitExitFullscreen) {
    elem.webkitExitFullscreen();
    elem.getElementById("forFullScreen").onclick = goFullScreen();
  } else if (elem.msExitFullscreen) {
    elem.msExitFullscreen();
    elem.getElementById("forFullScreen").onclick = goFullScreen();
  }
}
