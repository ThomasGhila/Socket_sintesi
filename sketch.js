// CANVA
let canvas;

//BACKGROUND
var mappedDistance;
var mappedDistanceNoRand;
let noiseVar;
let seed = 0;

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
      let distance = dist(x, y, mouseX, mouseY);
      let distance2 = dist(mouseX, mouseY, pmouseX, pmouseY);
      let mappedDistance2 = map(distance2, 0, width, 25, 1000);

      frameRate(10);
      noiseVar = noise(seed, seed * 50);

      // if (distance < mappedDistance2 / noiseVar) {
      //   fill("#28ff02");

      //   mappedDistanceNoRand = map(distance, 0, mappedDistance2, 50, 5);
      //   mappedDistance = mappedDistanceNoRand * noiseVar;
      // } else {
      //   mappedDistance = 2;
      //   fill("#c1c1c1");
      // }
      mappedDistance = 2;
      fill("#c1c1c1");

      noStroke();

      ellipse(x, y, mappedDistance);

      seed += 0.01;
    }
  }
}
