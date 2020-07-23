
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,dustbin;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  paper=new Paper();
dustbin= new dustbin();

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  dustbin. display();


  drawSprites();


 
}



