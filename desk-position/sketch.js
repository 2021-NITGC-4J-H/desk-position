let image_path = "";

let img;
let ratioX;
let ratioY;
let offsetX = 0;
let offsetY = 190;
var square = [];

function preload() {
  img = loadImage(image_path);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ratioX = img.width / windowWidth;
  ratioY = img.height / windowHeight;
  img.resize(windowWidth, windowHeight * img.height / img.width);
  image(img, 0, 0);
}

function draw() {
  noStroke()
}

function doubleClicked() {
  image(img, 0, 0);
  square = [];
}

function mousePressed() {
  fill(0, 255, 0, 255);
  ellipse(mouseX, mouseY, 10, 10);
  square.push([mouseX, mouseY]);
  if (square.length == 4) {
    var out = "";
    for (const [x, y] of square) {
      out += `${int(x * ratioX + offsetX)}, ${int(y * ratioY + offsetY)}\n`;
    }
    print(out);
    square = [];
  }
}