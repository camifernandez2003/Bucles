function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200, 20, 100);

  for (let x = 20; x < width; x += 20) {
    for (let y = 20; y < height; y += 20) {
      let d = dist(mouseX, mouseY, x, y);
      let circleSize = map(d, 0, width, 18, 1);

      fill(random(200, 250), random(100, 250), random(150, 250));
      noStroke();
      circle(x, y, circleSize); // Dibuja el círculo con tamaño interactivo
    }
  }
}
