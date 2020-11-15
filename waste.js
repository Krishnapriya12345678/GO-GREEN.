class Waste {
    constructor(x,y) {
      var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:2
      }
      this.body = Bodies.circle(x, y,30,options);
      this.radius=30
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle= this.body.angle
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill('yellow');
      strokeWeight(4)
      stroke("pink")
      circle(0, 0,50);
      pop();
    }
  };