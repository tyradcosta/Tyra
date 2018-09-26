// variables used throuout the code
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



function preload(){
//sound file for when smake eats food
    soundFormats('mp3', 'ogg');
munch = loadSound('assets/munch.mp3');
//sound file for background music
soundFormats('mp3', 'ogg');
music= loadSound('assets/music.mp3');
// load 'food' object
kity = loadImage("assets/kity.png"); 

}

function setup() {

    kity = loadImage("assets/kity.png"); 
    music= loadSound('assets/music.mp3');
    munch = loadSound('assets/munch.mp3');
    
//create game screen
createCanvas(1420,500);
w = floor(width / rez);
h = floor(height / rez);
frameRate(7);
// link snake object from other js file 
snake = new Snake();
preload();
foodLocation();
    levelup();
var points = 0; 

}

// function that creates 'food' object and sets it to new loaction everytime one has been eaten
function foodLocation() {
var x = floor(random(w));
var y = floor(random(h));
food = createVector(x, y);  
}

// function that controls the direction of snake using key arrows 
function keyPressed() {
    
    togglePlay();

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
// background color
levelup();
 background("#F4E5CB");
scale(rez);
    
// if the snake eats the food then set new loaction for food and increment score by 10  and play the munch sound
if (snake.eat(food)) {
 foodLocation();
points+=10 ;
if(points >= 10){level+= 1;};
  print(points);
   munch.play();  
}
 // show the updated snake as it grows 
snake.update();
snake.show();
noStroke();
// function that increments points by 10
collectpoints();
image(kity,food.x,food.y,3,3);
  
// if snake hits boundries of game screen then show the Game Over screen
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

//function that creates the score board and updates it
function collectpoints(){

scale(1);

fill("#DBDCDD");
rect(0,0,12,2,0.5);

fill("white");
textSize(1);
text("Level " + level, 2, 1.5);
text("Points" + points,6, 1.5);
}

//checks if music is playing and plays it if not 
function togglePlay(){

if( music.isPlaying()) {
}
else{
   music.loop();
}
}

function levelup(){
bee = {
    x: random(500),
    y: random(500),
    xdir: 10,
    ydir: 10,
    s:1   
}
    if(points >= 50) {level=2;};
    if(points >= 100){level=3};
    if(points >= 150){level=4};
    if(points >= 200){level=5};
    if(points >= 250){level=6};
    if(points >= 300){level=7};
    if(points >= 350){level=8};
    if(points >= 400){level=9};
    if(points >= 450){level=10};
}



