
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    boy=new Boy(280,600,200,200);
	//boy.scale=5;

	stone=new Stone(180,600,50);
    tree=new Tree(800,500,500,500);
    
    m1=new Mango(694,436,50,50);
//694,436
	fill("green");
	chain=new Slingshot(stone.body,{x:200,y:548});
//	Engine.run(engine);
  
}


function draw() {

  Engine.update(engine);
  background(220);
  boy.display();
  stone.display();
  chain.display();
  m1.display();
  tree.display();

  console.log(mouseX);
  console.log(mouseY);//122,556
}


function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    chain.fly();
}