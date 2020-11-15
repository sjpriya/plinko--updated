class Particle {
    constructor (x,y,r,colour){
    
    var options = {
    
    isStatic: false,
    restitution: 0.8
    
    }
    this.body = Bodies.circle(x,y,r,options)
    
    this.colour = rgb(random(0,255),random(0,255),random(0,255));
    this.x = x;
    this.y = y;
    this.r = r;
    World.add(world,this.body)
    
    }
    display() {
    var pos = this.body.position;
    
    fill("white");
    ellipse(pos.x,pos.y,this.r,this.r);
    }}