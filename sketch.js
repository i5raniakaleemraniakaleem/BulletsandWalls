var car,wall;
var speed,weight;

function setup() {
  createCanvas(800,400);
  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed;
  wall=createSprite(1500,200,60,height/2);
  
  speed=random(55,90);
  weight=random(400,1500);

  car.collide(wall);
  createEdgeSprites();
  car.bounceOff(edges);

  0.5*weight*speed*speed/22500
}

function draw() {
  background(255,255,255);  
  drawSprites();
}