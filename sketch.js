var waste,wasteBody,waste_options
var ground,groundBody,ground_options, box1,box2,box3,waste
  
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);
  
  

  ground_options={
    isStatic:true
  }
  
  
	engine = Engine.create();
  world = engine.world;
  

    
    ground=createSprite(400,590,1200,10,ground_options)
     World.add(world,ground)

  groundBody=Bodies.rectangle(400,600,1200,10,ground_options)
  World.add(world,groundBody)
 
box1=new Box(580,530)
box2=new Box(420,530)
box3=new Box2(500,580,120,20)


waste=new Waste(100,590);
Engine.run(engine);
    
}


function draw() {
 
 background('black');
  

 drawSprites();


ground.x=groundBody.position.x
ground.y=groundBody.position.y

box1.display();
box2.display();
box3.display();
waste.display();


}






function keyPressed(){
  if(keyCode===UP_ARROW){
   Matter.Body.applyForce(waste.body,waste.body.position,{x:50,y:-200})
  }
}







