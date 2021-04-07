const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var ground1,ground2,ground3,engine,world;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16;
var B1,B2,B3,B4,B5,B6,B7,B8,B9;
var ball1,sling1;
function setup(){
 createCanvas(2100,900);
 engine=Engine.create();
 world=engine.world;
 ground1=new Ground(1050,883,2100,30);
 ground2= new Ground(800,700,500,25);
 b1=new Box(690,695,60,60);
 b2=new Box(725,695,60,60);
 b3=new Box(760,695,60,60);
 b4=new Box(795,695,60,60);
 b5=new Box(830,695,60,60);
 b6=new Box(865,695,60,60);
 b7=new Box(900,695,60,60);
 b8=new Box(725,665,60,60);
 b9=new Box(760,665,60,60);
 b10=new Box(795,665,60,60);
 b11=new Box(830,665,60,60);
 b12=new Box(865,665,60,60);
 b13=new Box(760,635,60,60);
 b14=new Box(795,635,60,60);
 b15=new Box(830,635,60,60);
 b16=new Box(795,605,60,60);
 ground3=new Ground(1550,535,400,25);
 B1=new Box(1485,530,60,60);
 B2=new Box(1505,530,60,60);
 B3=new Box(1535,530,60,60);
 B4=new Box(1565,530,60,60);
 B5=new Box(1595,530,60,60);
 B6=new Box(1505,500,60,60);
 B7=new Box(1535,500,60,60);
 B8=new Box(1565,500,60,60);
 B9=new Box(1535,470,60,60);
 ball1=new Ball(200,450,60,60)
 sling1=new SlingShot(this.ball1,{x:100,y:200});
 
}

function draw(){
    background("black");
    Engine.update(engine);
    ground1.display();
    ground2.display();
    textSize(40);
    fill("white");
    text("Drag the Hexagonal Stone and Release it,to launch it towards the blocks",450,100)
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    ground3.display();
    B1.display();
    B2.display();
    B3.display();
    B4.display();
    B5.display();
    B6.display();
    B7.display();
    B8.display();
    B9.display();
    ball1.display();
    sling1.display();
    
}