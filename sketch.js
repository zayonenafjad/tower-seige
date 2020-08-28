const Constraint=Matter.Constraint
const Engine=Matter.Engine
const World=Matter.World
const Body=Matter.Body



var slingshot,square1,square2,square3,square4,square5,square6,square7,square8,square9,square10
var square11,square12,square14,square14,square15,square16,square17



function setup() {
  createCanvas(800,400);
slingshot= new Slingshot(50,200,20,20);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
slingshot.display();
  
}