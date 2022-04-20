//Credits:
//reference for the animated text: https://openprocessing.org/sketch/825026

Matter.use("matter-attractors");

//GLOBAL VARIABLES:

//for the loading animation
let angl = 0;
loading = true;

//for the pixel texture effect
let noiseGra;

//for matter.js interaction
let Engine = Matter.Engine,
  World = Matter.World,
  Body = Matter.Body,
  Bodies = Matter.Bodies,
  Events = Matter.Events,
  Runner = Matter.Runner,
  Render = Matter.Render,
  Composite = Matter.Composite,
  Composites = Matter.Composites,
  Constraint = Matter.Constraint,
  Mouse = Matter.Mouse,
  MouseConstraint = Matter.MouseConstraint;

let image1, image2, image3, image4;
let canvas;
let canvasmouse;

let engine;
let world;
let box1;
let boxes = [];
let attractiveBody;

let boundaries = [];
let myImages = [];
let rx, ry, rz;

let box2;
let mConstraint;
let render;
let mouse;

/////////////////////////////////////////////////////////////////

function preload() {
  for (let i = 0; i <= 25; i++) {
    myImages[i] = loadImage(
      "./assets/buttons-chiara/btn" + i + ".png",
      imagesLoaded
    );
  }
  // arrow = loadImage("./assets/freccia.svg");
}

function imagesLoaded() {
  console.log("images are loaded");
  loading = false;
}

/////////////////////////// SETUP //////////////////////////////
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("landing");
  //canvas.style("z-index", "1");
  background("rgb(245,245,245)");
  textFont("px");

  //matter.js interaction : setup
  engine = Engine.create();
  let runner = Runner.create();
  world = engine.world;
  engine.world.gravity.y = 0;
  Matter.Runner.run(engine);

  //Boundaries
  // push()
  // boundaries.push(new Boundary(width / 2, height, width, 10, 0));
  // boundaries.push(new Boundary(width / 2, 0, width, 10, 0));
  // boundaries.push(new Boundary(0, height / 2, 10, height, 0));
  // boundaries.push(new Boundary(width, height / 2, 10, height, 0));
  // pop()

  render = Render.create({
    element: canvas.elt,
    engine: engine,
    options3: {
      showVelocity: false,
      width: 100,
      height: 100,
      wireframes: false,
      background: "rgb(245,245,245)",
    },
  });
  World.add(world, render);

  mouse = Mouse.create(render.canvas.elt); //add mouse control

  attractiveBody = Bodies.circle(mouseX, mouseY, 20, {
    render: {
      fillStyle: `rgb(245,245,245)`,
      strokeStyle: `rgb(245,245,245)`,
      lineWidth: 0,
    },
    isStatic: true,
    plugin: {
      attractors: [
        function (bodyA, bodyB) {
          return {
            x: (bodyA.position.x - bodyB.position.x) * 1e-6,
            y: (bodyA.position.y - bodyB.position.y) * 1e-6,
          };
        },
      ],
    },
  });
  World.add(world, attractiveBody);

  //pixel texture effect : setup
  noiseGra = createGraphics(windowWidth, windowHeight);
  noiseGra.loadPixels();
  for (let x = 0; x <= width; x++) {
    for (let y = 0; y <= height; y++) {
      noiseGra.set(
        x,
        y,
        color(200, noise(x / 10, y / 10, (x * y) / 50) * random([0, 40, 80]))
      );
    }
  }
  noiseGra.updatePixels();
}

/////////////////////////// DRAW //////////////////////////////
function draw() {
  push();
  //blendMode(HARD_LIGHT);
  background(0);
  // image(arrow, windowWidth / 2, windowHeight - 20);

  pop();

  //text title and subtitle
  // let div = createDiv('div');
  // div.addClass('content-wrapper');
  // let h1 = createElement('h1', 'ATTENTION WAR');
  // h1.style('font-family', 'PxGrotesk');
  // h1.style('font-size', '13.3vw');
  // h1.style('z-index', '-1');

  push();
  let h1 = "ATTENTION WAR";
  textAlign(CENTER, TOP);
  fill(255);
  textSize((windowWidth / 100) * 12.6);
  text(h1, windowWidth / 2, 0);
  let h1width = textWidth(h1);
  pop();

  // push();
  // let h2 = "A guide to streaming platforms' user retention strategies";
  // textAlign(LEFT, TOP);
  // fill(255);
  // textSize(24);
  // text(h2, 25, h1width * 0.092 + 40);
  // pop();

  //matter.js interaction : draw
  if (boxes.length <= 29) {
    //for (let i = 0; i < 1; i++) {
    boxes.push(
      new Box(myImages[0], windowWidth / 2, windowHeight / 2, 268, 90)
    );
    boxes.push(
      new Box(myImages[1], windowWidth / 2, windowHeight / 2, 217, 75)
    );
    boxes.push(
      new Box(myImages[2], windowWidth / 3, windowHeight / 2, 162, 60)
    );
    boxes.push(
      new Box(myImages[3], windowWidth / 3, windowHeight / 2, 280, 96)
    );
    boxes.push(new Box(myImages[4], windowWidth / 2, windowHeight / 2, 76, 38));
    boxes.push(
      new Box(myImages[5], windowWidth / 2, windowHeight / 2, 274, 100)
    );
    boxes.push(
      new Box(myImages[6], windowWidth / 3, windowHeight / 2, 229, 46)
    );
    boxes.push(
      new Box(myImages[7], windowWidth / 3, windowHeight / 2, 371, 60)
    );
    boxes.push(new Box(myImages[8], 0, windowHeight / 2, 115, 45));
    boxes.push(new Box(myImages[9], 0, windowHeight / 2, 54, 76));
    boxes.push(new Box(myImages[10], 0, windowHeight / 2, 266, 70));
    boxes.push(new Box(myImages[11], 0, windowHeight / 2, 423, 90));
    boxes.push(new Box(myImages[12], windowWidth, windowHeight / 2, 322, 76));
    boxes.push(new Box(myImages[13], windowWidth, windowHeight / 2, 87, 87));
    boxes.push(new Box(myImages[14], windowWidth, windowHeight / 2, 99, 99));
    boxes.push(new Box(myImages[15], windowWidth, windowHeight / 2, 322, 76));
    boxes.push(new Box(myImages[16], windowWidth, windowHeight / 2, 24, 24));
    boxes.push(new Box(myImages[16], 0, windowHeight, 24, 24));
    boxes.push(new Box(myImages[16], windowWidth, 0, 24, 24));
    boxes.push(new Box(myImages[17], windowWidth, windowHeight / 2, 136, 40));
    boxes.push(new Box(myImages[18], 0, windowHeight / 2, 66, 36));
    boxes.push(new Box(myImages[19], 0, windowHeight / 2, 290, 69));
    boxes.push(new Box(myImages[20], 0, windowHeight, 32, 32));
    boxes.push(new Box(myImages[20], windowWidth, 0, 32, 32));
    boxes.push(new Box(myImages[20], windowWidth, 0, 32, 32)); //24
    boxes.push(new Box(myImages[21], 0, 0, 210, 60));
    boxes.push(new Box(myImages[22], windowWidth, windowHeight, 192, 60));
    boxes.push(new Box(myImages[23], 0, 0, 230, 73));
    boxes.push(new Box(myImages[24], 0, 0, 54, 52));
    boxes.push(new Box(myImages[25], windowWidth, windowHeight, 226, 54));
    //}
  }

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }

  moveIt();

  //pixel texture effect : draw
  // push();
  // blendMode(MULTIPLY);
  // image(noiseGra, 0, 0);
  // pop();

  // push();
  // rectMode(CORNERS);
  // fill("red");
  // rect(0, windowHeight, windowWidth, (windowHeight / 20) * 19);
  // pop();
}

function windowResized() {
  canvas = resizeCanvas(windowWidth, windowHeight);
}
