class Iron {
    constructor(x, y) {
      var options = {
        'density':30,
        'friction': 3,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(x, y, 100, 40, options);
      this.width = 100;
      this.height = 40;
      World.add(world, this.body);
    };
    display(){
      push();
      var ironpos=this.body.position;
      push()
      translate(ironpos.x, ironpos.y);
      rectMode(CENTER)
      strokeWeight(4);
      stroke("black");
      fill(206, 30, 30);
      rect(0, 0, this.width, this.height);
      pop();
    };
  };