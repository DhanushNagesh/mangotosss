class Mango {
    constructor(x,y) {
      var options = {
        isStatic:true,
        restitution:0,
        friction: 1
       
        
   
      }
      this.body = Bodies.circle(x, y, 20, options);
      this.width = 40;
      this.height = 40;

      this.image =  loadImage("images/mango.png")
      
      
      World.add(world, this.body);
    }
    display(){

      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  };
