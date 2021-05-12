const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone1 = new stone(100,580,20,150)
    stone2 = new stone(400,580,20,100)
    circle1 = new Rubber(200,580,10)
    circle2 = new Rubber(290,580,50)


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
    stone1.display();
    stone2.display();
    circle1.display();
    circle2.display();
}