var snake;
var rez = 20;
var food;
var w;
var h;
var munch;
var points= 0;
var level = 1;
var button; 


function setup() {
  createCanvas(windowWidth,windowHeight);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(7);
  snake = new Snake();
 kity = loadImage("assets/kity.png");
    
  foodLocation();

  soundFormats('mp3', 'ogg');
  munch = loadSound('assets/munch.mp3');
    
   var points = 0; 
    
    button = createButton("Click to Start");
    button.position(0,0);
    button.mousePressed(startGame);
    
}

function foodLocation() {
  var x = floor(random(w));
  var y = floor(random(h));
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

     background("#F4E5CB");
    border();
    startGame();

function levelup(){
    
scale(1);

fill("#B2C8D1");
rect(0,0,12,2);

    fill("white");
textSize(1);
text("Level " + level, 2, 1.5);
text("Points" + points,6, 1.5);



}


function border() {
    
  stroke(255);
  rect(0,0,width,height);
}



function startGame(){
    
    
  scale(rez);
  if (snake.eat(food)) {
     foodLocation();
      points+= 10 ;
        print(points);
       munch.play();  

  }
  snake.update();
  snake.show();
   noStroke();
	
//fill("#F476D1");

image(kity,food.x,food.y,3);
    
  if (snake.endGame()) {
     
    print("END GAME");
    background("#B6A895");
       noLoop();
      textSize(3);
      fill("#FFB5C2");
      
      textAlign(CENTER);	
text('GAME OVER',18,10);

  }
    
    levelup();
}



}