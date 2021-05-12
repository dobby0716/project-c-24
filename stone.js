class stone {
    constructor(x, y,w,h) {
      var options = {
        'density':4,
        'friction': 1.0,
        'restitution':0.5
      };
      this.body = Bodies.rectangle(x, y, w, h, options);
      this.width = w;
      this.height = h;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('white')
      fill('orange')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  