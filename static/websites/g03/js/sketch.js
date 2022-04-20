let screenshots = [];
let scrimgs = [];
let scrNumber = 0;
var clicks = 0;
let messages = [];
let renderer;
var sketchWidth;
let myFont;
let arrowBack;
let arrowForward;
let genesisScr = [];

function preload() {
  for (let i = 0; i < 29; i++) {
    screenshots[i] = loadImage(
      "./assets/screenshots/Screenshot (" + i + ").png"
    );
    arrowBack = loadImage("./assets/arrow_back.svg");
    arrowForward = loadImage("./assets/arrow_forward.svg");
  }
  genesisScr = loadImage("./assets/screenshots/Screenshot.png");
  console.log(screenshots.length + "items");
  myFont = loadFont("font/ReadexPro-Regular.ttf");
}

function setup() {
  sketchWidth = document.getElementById("sketch-holder").offsetWidth;

  let renderer = createCanvas(sketchWidth, windowHeight);
  renderer.parent("sketch-holder");
  renderer.style("display", "block");
  background("#01f293");
  renderer.mousePressed(canvasClicked);
  noCursor();
}
// function spliceScr() {
//   clicks--;
//   let i = scrimgs.length - 1;
//   scrimgs.splice(i, 1);
//   console.log("i " + i);
// }

function canvasClicked() {
  if (mouseX > sketchWidth / 2) {
    clicks++;
    let randomx = random(75);
    let randomy = random(75);
    //   let randomf = random(windowWidth / 4, (windowWidth / 4) * 3);
    //   let randomfy = random(150);
    if (clicks >= screenshots.length) {
      let f = screenshots[32];
      let final = new Screenshot(randomx, randomy, f);
      scrimgs.push(final);
    } else {
      let a = screenshots[clicks];

      let b = new Screenshot(randomx, randomy, a);
      scrimgs.push(b);
    }
    for (let i = 0; i < scrimgs.length; i++) {
      scrimgs[i].show();
    }
    console.log("scrimgs " + scrimgs.length);
  } else if (clicks >= 0) {
    clicks--;
    let i = scrimgs.length - 1;
    scrimgs.splice(i, 1);
    console.log("i " + i);
  }

  for (let i = 0; i < scrimgs.length; i++) {
    scrimgs[i].show();
  }
  console.log("scrimgs " + scrimgs.length);
}

function draw() {
  sketchWidth = document.getElementById("sketch-holder").offsetWidth;

  let renderer = createCanvas(sketchWidth, windowHeight);
  renderer.parent("sketch-holder");
  renderer.style("display", "block");

  background("#0d0d0d");
  push();
  translate(renderer.width / 2, renderer.height / 2.5);
  // fill("white");
  // textSize(35);
  // textFont(myFont);
  // textAlign(CENTER, CENTER);
  // text("Click right to see where 'sustainable' appears", 0, 0);
  // text("Click left to go back", 0, 50);
  imageMode(CENTER);

  image(genesisScr, 0, 0, genesisScr.width / 2, genesisScr.height / 2);
  for (let i = 0; i < scrimgs.length; i++) {
    scrimgs[i].show();
  }
  pop();

  if (mouseX < sketchWidth / 2) {
    image(arrowBack, mouseX, mouseY, 50, 50);
  }
  if (mouseX > sketchWidth / 2) {
    image(arrowForward, mouseX, mouseY, 50, 50);
  }
}

class Screenshot {
  constructor(x, y, img) {
    this.x = x;
    this.y = y;
    this.screenshot = img;
  }

  show() {
    image(
      this.screenshot,
      this.x,
      this.y,
      this.screenshot.width / 1.5,
      this.screenshot.height / 1.5
    );
  }
}

class Message {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  show() {
    fill("red");
    ellipse(this.x, this.y, 200, 200);
  }
}

class fakeButton {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
function myFunction() {
  console.log("ehi");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
