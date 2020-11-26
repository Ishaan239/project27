
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint  = Matter.Constraint;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, startX, startY;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(800, height/4, width/7, 20);
	startX = width/2;
	startY = height/4+300;
	bobObject1 = new Bob(startX-80, startY, 40);
	bobObject2 = new Bob(startX-40, startY, 40);
	bobObject3 = new Bob(startX, startY, 40);
	bobObject4 = new Bob(startX+40, startY, 40);
	bobObject5 = new Bob(startX+80, startY, 40);

	rope1 = new Rope(bobObject1.body, roof.body, -80, 0);
	rope2 = new Rope(bobObject2.body, roof.body, -40, 0);
	rope3 = new Rope(bobObject3.body, roof.body, 0, 0);
	rope4 = new Rope(bobObject4.body, roof.body, +40, 0);
	rope5 = new Rope(bobObject5.body, roof.body, +80, 0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();
  
  drawSprites();

  if(keyIsDown(UP_ARROW)) {
	  Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x:-15, y:-15});
  }
 
}



