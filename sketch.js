const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup() {
  createCanvas(900,400);
  engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2,height,900,20);
    stand1 = new Ground(width/2, height-100, 160, 10)
    stand2 = new Ground(width/2 + 250, height-230, 160, 10)

    polygon = Bodies.circle(50, 200, 20)
    World.add(World, polygon)

    slingshot = new SlingShot(this.polygon, {x:100, y:200});

    box1level1 = new Box(400, height-100, 30, 40);
}

function draw() {
  background('black');  

  ground.display();
  stand1.display();
  stand2.display();

  box1level1.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}