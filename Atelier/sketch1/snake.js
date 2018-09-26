

class Snake {
    
  
  constructor() {
  	this.body = [];
    this.body[0] = createVector(floor(w/2), floor(h/2));
    this.xdir = 0;
    this.ydir = 0;
    this.len = 0;
  }
  
  setDir(x, y) {
  	this.xdir = x*1.5;
    this.ydir = y*1.5;
  }
  
  update() {
  	var head = this.body[this.body.length-1].copy();
    this.body.shift();
    head.x += this.xdir;
    head.y += this.ydir;
    this.body.push(head);
  }
  
  grow() {
  	var head = this.body[this.body.length-1].copy();
    //this.len++;
     // console.log(this.body.length);
    this.body.push(head);
    //  console.log(this.body.length);
  }
  
  endGame() {
  	var x = this.body[this.body.length-1].x;
    var y = this.body[this.body.length-1].y;
    if(x > w || x < 0 || y > h || y < 0) {
       return true;
    }
    for(var i = 0; i < this.body.length-1; i++) {
    	var part = this.body[i];
      if(part.x === x && part.y === y) {
      	return true;
      }
    }
    return false;
  }
  
  eat(pos) {
  	var x = this.body[this.body.length-1].x;
    var y = this.body[this.body.length-1].y;
		var eat = dist(x,y,food.x,food.y);
    if(eat <= 3) {
      this.grow();
      return true;
        munch.play();   
        print(points);  
    }
    return false;
  }
  
  show() {


  	for(var i = 0; i < this.body.length; i++) {
        noStroke();
    	fill("#ffb5c2");
      rect(this.body[i].x, this.body[i].y,3,3,1)
    }
  }

}


