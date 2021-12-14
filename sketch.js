// CANVA
let canvas;

//BACKGROUND
var mappedDistance;
var mappedDistanceNoRand;
let noiseVar;
let seed = 0;

let pcursorPosX;
let pcursorPosY;
let noiseVarX;
let noiseVarY;
let seed2 = 0;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-999");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  //BACKGROUND

  background("#989898");

  // for (let x = 35; x < width - 35; x += 35) {
  //   for (let y = 35; y < height - 35; y += 35) {
  //     let distance = dist(x, y, mouseX, mouseY);

  //     frameRate(10);
  //     noiseVar = noise(seed, seed * 50);

  //     if (distance < 200) {
  //       fill("#28ff02");

  //       mappedDistanceNoRand = map(distance, 0, 200, 45, 5);
  //       mappedDistance = mappedDistanceNoRand * noiseVar;
  //     } else {
  //       mappedDistance = 2;
  //       fill(0);
  //     }

  //     noStroke();

  //     ellipse(x, y, mappedDistance);

  //     seed += 0.01;
  //   }
  // }

  for (let x = 23; x < width - 23; x += 23) {
    for (let y = 23; y < height - 23; y += 23) {
      let cursorPosX = noiseVarX;
      let cursorPosY = noiseVarY;

      let distance = dist(x, y, cursorPosX, cursorPosY);
      let distance2 = dist(cursorPosX, cursorPosY, pcursorPosX, pcursorPosY);
      let mappedDistance2 = map(distance2, 0, width, 20, 100);

      frameRate(10);
      noiseVar = noise(seed * 50);
      noiseVarX = noise(seed2 * 20) * width;
      noiseVarY = noise(seed2 * 5) * height;

      if (distance < mappedDistance2 / noiseVar) {
        fill("#28ff02");

        mappedDistanceNoRand = map(distance, 0, mappedDistance2, 40, 5);
        mappedDistance = mappedDistanceNoRand * noiseVar;
      } else {
        mappedDistance = 2;
        fill("#c1c1c1");
      }

      noStroke();

      ellipse(x, y, mappedDistance);

      seed += 0.01;
      seed2 += 0.000005;

      pcursorPosX = cursorPosX;
      pcursorPosY = cursorPosY;

      // console.log("noiseVar:" + noiseVar);
      // console.log("noiseVarX:" + noiseVarX);
      // console.log("noiseVarY:" + noiseVarY);
    }
  }
}
