
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(240,350,20);
	bob2 = new Bob(280,350,20);
	bob3 = new Bob(320,350,20);
	bob4 = new Bob(360,350,20);
	bob5 = new Bob(400,350,20);
	bob6 = new Bob(440,350,20);

	base = new Base(350,100,300,20);

	Constriant = Matter.Constraint;

	rope1 = new Rope(bob1.body,base.body,bob1.radius.body*2,0);


	


	
	

	Engine.run(engine);
  
}


function draw() {
  background(0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  
  base.display();

  rope1.display();
  
  drawSprites();
 
}



