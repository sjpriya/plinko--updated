const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var plinkos = [];
var particles = [];




function setup(){
    createCanvas(310,500);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(155,495,300,15);
    div1 = new Division(2,250,10,510);
    div2 = new Division(52,380,10,300);
    div3 = new Division(104,380,10,300);
    div4 = new Division(156,380,10,300);
    div5 = new Division(208,380,10,300);
    div6 = new Division(260,380,10,300);
    div7 = new Division(306.8,250,10,510);
   


}

function draw(){
    background(0);
    Engine.update(engine);
    strokeWeight(4);

    
    for (var j = 40; j <=innerWidth; j=j+50) {
 
        plinkos.push(new Plinko(j,75));

    }

    div1.display();

    div2.display();

    div3.display();

    div4.display();

    div5.display();

    div6.display();

    div7.display();

    ground.display();

    if(frameCount%60===0){
        particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
       
      }
    
     for (var j = 0; j < particles.length; j++) {
      
        particles[j].display();
      }
      




}
