var ground;
var line, line1, line2;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	line = createSprite(520,623,15,65);
	line.shapeColor = color(255);

	line1 = createSprite(640,623,15,65);
	line1.shapeColor = color(255);

	line2 = createSprite(578,650,110,15);
	line2.shapeColor = color(255);

	groundSprite=createSprite(400,665,800,20);
	groundSprite.shapeColor=color("purple");

	ball = createSprite(20,640,20,20);
	ball.shapeColor = color("skyblue")

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  if(keyDown("space")){
	

  }
  
  drawSprites();
 
}



