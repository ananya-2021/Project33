class Snow {
    constructor(x,y,width,height) {
      var options = {
          'friction':0.1,
          'restitution' : 1
      }
      this.body = Bodies.rectangle(x,y,width,height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("snow.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill("blue");
      image(this.image,0,0,this.width,this.height);
      if(this.body.position.y > 600){
          Matter.Body.setPosition(this.body,{x:random(0,600),y:random(0,600)});
      }
      pop();
    }
  };
  
  
    
     