
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world, engine;
var ball;
var radius = 40;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;
	var ball_options={
		isStatic:false,
		restitusion:0.3,
		fricition:0,
		density:1.2
	}
	//Create the Bodies Here.
		ball=Bodies.circle(400,600,radius/2,ball_options);
		World.add(world,ball);

	ground = new Ground(width/2,670,width,10);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1350,600,20,120)


	

	


	Engine.run(engine);
  
}


function draw() {
  background(51);
  rectMode(CENTER);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,radius, radius);
  ground.display();
  leftSide.display();
  rightSide.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:40,y:9.5})
	}
}



