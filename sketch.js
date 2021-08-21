const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var iron1;
var stone1;
var rubber, rubber1, rubber2, rubber3, rubber4, rubber5, rubber6, rubber7, rubber8, rubber9, rubber10


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100); 

    rubber = new Rubber(900,550,80);
    stone1 = new Stone(700,550);
    iron1 = new Iron(200,550);

    rubber1 = new Rubber(300,570,10);
    rubber2 = new Rubber(320,570,10);
    rubber3 = new Rubber(340,570,10);
    rubber4 = new Rubber(360,570,10);
    rubber5 = new Rubber(380,570,10);
    rubber6 = new Rubber(400,570,10);
    rubber7 = new Rubber(420,570,10);
    rubber8 = new Rubber(440,570,10);
    rubber9 = new Rubber(460,570,10);
    rubber10 = new Rubber(480,570,10);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();

    rubber.display();
    stone1.display();
    iron1.display();

    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    rubber6.display();
    rubber7.display();
    rubber8.display();
    rubber9.display();
    rubber10.display();
}