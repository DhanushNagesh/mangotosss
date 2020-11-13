class Stone {
    constructor(x,y) {
      var options = {
        isStatic:false,
        restitution:1.1,
        friction:0.04,
        density:0.2
        
   
      }
      this.body = Bodies.circle(x, y, 20, options);
      this.width = 40;
      this.height = 40;

      this.image =  loadImage("images/stone.png")
      
      
      World.add(world, this.body);
    }
    display(){

      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill(125);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  };
