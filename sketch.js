const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body
const Render = Matter.Render
const Constraint = Matter.Constraint;

var engine, world;
var bob1,bg;

function setup(){

}

function setup(){
    createCanvas(1200,700);
   
    engine = Engine.create();
    world = engine.world;
 
    bobDiameter = 40;
    ground=new Ground(width/2,50,width/7,20);
    startBobPositionX=width/2;
    startBobPositionY=height/4+500;
    
	bob1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bob2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bob3=new bob(startBobPositionX,startBobPositionY,bobDiameter);
	bob4=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bob5=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
    

    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
          width: 1200,
          height: 700,
          wireframes: false
        }
      });

      chain1=new Chain(bob1.body,ground.body,-bobDiameter*2, 0)
     
      chain2=new Chain(bob2.body,ground.body,-bobDiameter*1, 0)
     
      chain3=new Chain(bob3.body,ground.body,0, 0)
     
      chain4=new Chain(bob4.body,ground.body,bobDiameter*1, 0)
     
      chain5=new Chain(bob5.body,ground.body,bobDiameter*2, 0)
      
  

    

    Engine.run(engine);
}

function draw(){
    rectMode(CENTER);
   background("pink");
    Engine.update(engine);
   
    
    chain1.display();
    chain2.display();
    chain3.display();
    chain4.display();
    chain5.display();


    ground.display();

    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();
    
    
    
  
    
}


function keyPressed() {
    if (keyCode === UP_ARROW ) {
        Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
   
    
     }
    
    }

    
    function drawLine(constraint)
    {
        bobBodyPosition=constraint.bodyA.position
        GroundBodyPosition=constraint.bodyB.position
    
        GroundBodyOffset=constraint.pointB;
        
        GroundBodyX=GroundBodyPosition.x+GroundBodyOffset.x
        GroundBodyY=GroundBodyPosition.y+GroundBodyOffset.y
        line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
    }
    