function moveIt() {
  if (!mouse.position.x) return;
  // smoothly move the attractor body towards the mouse
  Body.translate(attractiveBody, {
    x: (mouse.position.x - attractiveBody.position.x) * 0.2,
    y: (mouse.position.y - attractiveBody.position.y) * 0.2,
  });
}

// function Boundary(x, y, w, h, a) {
//   let options = {
//       friction: 0,
//       restitution: 0.95,
//       angle: a,
//       isStatic: true
//   };
//   this.body = Bodies.rectangle(x, y, w, h, options);
//   this.w = w;
//   this.h = h;
//   World.add(world, this.body);
//
//   this.show = function() {
//       let pos = this.body.position;
//       let angle = this.body.angle;
//       push();
//       translate(pos.x, pos.y);
//       rotate(angle);
//       rectMode(CENTER);
//       strokeWeight(2);
//       //noFill();
//       rect(0, 0, this.w, this.h);
//       pop();
//   };
// }

function Box(source, x, y, w, h) {
  let options = {
    friction: 0.5,
    restitution: 0.1,
    mass: 0.12,
    // inertia: Infinity,
  };
  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.h = h;
  World.add(world, this.body);

  this.show = function () {
    let pos = this.body.position;
    let angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    //blendMode(BLEND);
    fill(0);
    // rotate(angle);
    rectMode(CENTER);
    // rect(0, 0, this.w, this.h, 20);
    // fill(255);
    // text(name,0,0);
    imageMode(CENTER);
    image(source, 0, 0, this.w, this.h);
    pop();
  };
}
