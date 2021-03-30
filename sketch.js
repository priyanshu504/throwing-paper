
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground,part1,part2,part3,pap,joiner;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


ground=new Ground(800,350,1600,20);
part1= new Dust(1100,330,200,20);
part2= new Dust(1000,290,20,100);
part3= new Dust(1200,290,20,100);
pap=new Paper(30);
joiner=new launch(pap.body,{x:400,y:200});
	
  
}


function draw() {
 
  background(255);
  Engine.update(engine);
  rectMode(CENTER);





 ground.display();
  part1.display();
  part2.display();
  part3.display();
  pap.display();
  joiner.display();
}

function mouseDragged(){

Matter.Body.setPosition(pap.body,{x:mouseX,y:mouseY})


}
function mouseReleased(){

joiner.fly();

}
//function keypressed(){
//if(keyDown(UP_ARROW)){
//Matter.Body.applyForce(pap.body,pap.body.position,{x:85,y:-85})

//}
//}