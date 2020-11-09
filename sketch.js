const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var roof,bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;


   roof = new Ground(400,100,600,40);
    bob1=new Paper(200,400,50);
    bob2=new Paper(300,400,50);
    bob3=new Paper(400,400,50);
    bob4=new Paper(500,400,50);
    bob5=new Paper(600,400,50);
    rope1=new Chain(bob1.body,roof.body,{x:-200,y:0});
    rope2=new Chain(bob2.body,roof.body,{x:-100,y:0});
    rope3=new Chain(bob3.body,roof.body,{x:0,y:0});
    rope4=new Chain(bob4.body,roof.body,{x:100,y:0});
    rope5=new Chain(bob5.body,roof.body,{x:200,y:0});

}

function draw(){
    background(255);
    Engine.update(engine);
   roof.display();
    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();
    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
   rope5.display();
}
function keyPressed(){

    if(keyCode===UP_ARROW){
        Matter.body.applyForce(Paper.body,paper.body.position{x:-35,y:35});

    }
}
