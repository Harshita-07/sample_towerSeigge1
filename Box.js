  class Box{
    constructor(x, y, width, height,) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.color= color(random(0,255), random(0,255), random(0,255))
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        push();
        var pos =this.body.position;
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        fill(this.color);
        rect(pos.x, pos.y, this.width, this.height);
        pop();

      }
}
  