var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  createSprite(600, 200, 70, 60);
  createSprite(200, 200, 40, 80);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height/2);
  speed=random(223,321);
  weight=random(30,52);

}