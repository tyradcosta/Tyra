var snake;
var rez = 20;
var food;
var w;
var h;
var munch;
var music;
var points= 0;
var level = 1;
var button; 


function setup() {
  createCanvas(1420,500);
frameRate(30);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(7);
  snake = new Snake();
 kity = loadImage("assets/kity.png");
    
  foodLocation();

  soundFormats('mp3', 'ogg');
  munch = loadSound('assets/munch.mp3');
    
  soundFormats('mp3', 'ogg');
  music= loadSound('assets/music.mp3');
    
   var points = 0; 
    
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
	    collectpoints();
//fill("#F476D1");
scale(1);
image(kity,food.x,food.y,3,3);
    
  if (snake.endGame()) {
     
    print("END GAME");
    background("#ECECEC");
       noLoop();
      textAlign(CENTER);
      textSize(3);
      fill("white");	
      text('GAME OVER',36,20);

}
    
}

function collectpoints(){
    
scale(1);

fill("#DBDCDD");
rect(0,0,12,2,0.5);

    fill("white");
textSize(1);
text("Level " + level, 2, 1.5);
text("Points" + points,6, 1.5);



}



