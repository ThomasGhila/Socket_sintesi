function ShowAndHide0() {
  var x0A = document.getElementById("myDiv0A");
  if (x0A.style.display == "none") {
    x0A.style.display = "block";
    x0A.style.position = "absolute";
  } else {
    x0A.style.display = "none";
    x0A.style.position = "absolute";
  }
  var x0B = document.getElementById("myDiv0B");
  if (x0B.style.display == "none") {
    x0B.style.display = "block";
    x0B.style.position = "absolute";
  } else {
    x0B.style.display = "none";
    x0B.style.position = "absolute";
  }
}
function ShowAndHide0A() {
  var x0A = document.getElementById("myDiv0A");
  if (x0A.style.display == "block") {
    x0A.style.display = "none";
    x0A.style.position = "absolute";
  }
}
function ShowAndHide0B() {
  var x0B = document.getElementById("myDiv0B");
  if (x0B.style.display == "block") {
    x0B.style.display = "none";
    x0B.style.position = "absolute";
  }
}
function ShowAndHide0C() {
  var x0C = document.getElementById("myDiv0C");
  if (x0C.style.display == "block") {
    x0C.style.display = "none";
    x0C.style.position = "absolute";
  }
}
function ShowAndHide0D() {
  var x0D = document.getElementById("myDiv0D");
  if (x0D.style.display == "block") {
    x0D.style.display = "none";
    x0D.style.position = "absolute";
  }
}
function ShowAndHide0E() {
  var x0E = document.getElementById("myDiv0E");
  if (x0E.style.display == "block") {
    x0E.style.display = "none";
    x0E.style.position = "absolute";
  }
}
function ShowAndHide0F() {
  var x0F = document.getElementById("myDiv0F");
  if (x0F.style.display == "block") {
    x0F.style.display = "none";
    x0F.style.position = "absolute";
  }
}
function ShowAndHide0G() {
  var x0G = document.getElementById("myDiv0G");
  if (x0G.style.display == "block") {
    x0G.style.display = "none";
    x0G.style.position = "absolute";
  }
}
function ShowAndHide0H() {
  var x0H = document.getElementById("myDiv0H");
  if (x0H.style.display == "block") {
    x0H.style.display = "none";
    x0H.style.position = "absolute";
  }
}
function ShowAndHide0I() {
  var x0I = document.getElementById("myDiv0I");
  if (x0I.style.display == "block") {
    x0I.style.display = "none";
    x0I.style.position = "absolute";
  }
}
function ShowAndHide0J() {
  var x0J = document.getElementById("myDiv0J");
  if (x0J.style.display == "block") {
    x0J.style.display = "none";
    x0J.style.position = "absolute";
  }
}
function ShowAndHide0K() {
  var x0K = document.getElementById("myDiv0K");
  if (x0K.style.display == "block") {
    x0K.style.display = "none";
    x0K.style.position = "absolute";
  }
}
function ShowAndHide0L() {
  var x0L = document.getElementById("myDiv0L");
  if (x0L.style.display == "block") {
    x0L.style.display = "none";
    x0L.style.position = "absolute";
  }
}
function ShowAndHide0M() {
  var x0M = document.getElementById("myDiv0M");
  if (x0M.style.display == "block") {
    x0M.style.display = "none";
    x0M.style.position = "absolute";
  }
}

function ShowAndHide() {
  var x2A = document.getElementById("myDiv2A");
  if (x2A.style.display == "none") {
    x2A.style.display = "block";
    x2A.style.position = "absolute";
  } else {
    x2A.style.display = "none";
    x2A.style.position = "absolute";
  }
  var x2B = document.getElementById("myDiv2B");
  if (x2B.style.display == "none") {
    x2B.style.display = "block";
    x2B.style.position = "absolute";
  } else {
    x2B.style.display = "none";
    x2B.style.position = "absolute";
  }
  var x2C = document.getElementById("myDiv2C");
  if (x2C.style.display == "none") {
    x2C.style.display = "block";
    x2C.style.position = "absolute";
  } else {
    x2C.style.display = "none";
    x2C.style.position = "absolute";
  }
  ShowAndHide0A();
  ShowAndHide0B();
  ShowAndHide0C();
  ShowAndHide0D();
  ShowAndHide0E();
  ShowAndHide0F();
  ShowAndHide0G();
  ShowAndHide0H();
  ShowAndHide0I();
  ShowAndHide0J();
  ShowAndHide0K();
  ShowAndHide0L();
  ShowAndHide0M();
}

function ShowAndHide2A() {
  var x2A = document.getElementById("myDiv2A");
  if (x2A.style.display == "block") {
    x2A.style.display = "none";
    x2A.style.position = "absolute";
  }
}
function ShowAndHide2B() {
  var x2B = document.getElementById("myDiv2B");
  if (x2B.style.display == "block") {
    x2B.style.display = "none";
    x2B.style.position = "absolute";
  }
}
function ShowAndHide2C() {
  var x2C = document.getElementById("myDiv2C");
  if (x2C.style.display == "block") {
    x2C.style.display = "none";
    x2C.style.position = "absolute";
  }
}

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

// Make the DIV element draggable:

dragElement(document.getElementById("myDiv0A"));
dragElement(document.getElementById("myDiv0B"));
dragElement(document.getElementById("myDiv0C"));
dragElement(document.getElementById("myDiv0D"));
dragElement(document.getElementById("myDiv0E"));
dragElement(document.getElementById("myDiv0F"));
dragElement(document.getElementById("myDiv0G"));
dragElement(document.getElementById("myDiv0H"));
dragElement(document.getElementById("myDiv0I"));
dragElement(document.getElementById("myDiv0J"));
dragElement(document.getElementById("myDiv0K"));
dragElement(document.getElementById("myDiv0L"));
dragElement(document.getElementById("myDiv0M"));
dragElement(document.getElementById("myDiv2A"));
dragElement(document.getElementById("myDiv2B"));
dragElement(document.getElementById("myDiv2C"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
