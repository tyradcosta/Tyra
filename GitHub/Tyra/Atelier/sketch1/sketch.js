let snake;
let rez = 20;
let food;
let w;
let h;

function setup() {
  createCanvas(innerWidth,innerHeight);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(7);
  snake = new Snake();
 kity = loadImage("assets/kity.png");
    
  foodLocation();
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);
  
}

function keyPressed() {
  if(keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
  	snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
  	snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
  	snake.setDir(0, -1);
  } else if (key == ' ') {
  	snake.grow();
  }

}

function draw() {
      background("#2A1925");
  scale(rez);
  if (snake.eat(food)) {
     foodLocation();
  }
  snake.update();
  snake.show();
   noStroke();
image(kity,food.x,food.y, 3, 3 );
  
  if (snake.endGame()) {
  	print("END GAME");
    background("#F52E5F");
       noLoop();
      textSize(3);
      fill("#5C3E4E");
text('GAME OVER',18,10);
          textAlign(RIGHT);
      

   
  }
  

}
