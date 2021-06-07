const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var world,boy;

//Declare launcherObject and launchForce variable here
var ground1;
var mango1;
var stone1;
var boyImg;

function preload() {
	boyImg = loadImage("images/boy.png");
}

function setup() {
	createCanvas(400, 400);
	engine = Engine.create();
	world = engine.world;
  	ground1 = new Ground(200, 300, 100, 20);
	mango1 = new Mango(100, 100, 20);
	stone1 = new Stone(100, 180, 50);

	boy = createSprite(250, 250, 100, 100);
	boy.addImage(boyImg);

	Engine.run(engine);
}

function draw() {

  background(230);
  ground1.display();
  mango1.display();
  stone1.display();

  
}

//create mouseDragged function here


//create mouseReleased function here


//create keyPressed function here


