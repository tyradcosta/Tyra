var angle = 0;
 var speed = 0.05;
var centerX = 300;
var centerY = 300; 
var radius = 150;



function setup() {
  createCanvas(innerWidth,innerHeight);
    
}

function draw() {
    
    background(0,10)

    
var x = mouseX + mouseX/2 * cos (angle);
    
 var y = mouseY + mouseY/2 * sin (angle);


    
  noStroke();
    fill(mouseX,mouseY,80);
ellipse(x,y,75,75);
    
   noStroke();
     fill(mouseX,mouseY,150);
    ellipse(x,y,40,75);
      
    for(var i = 0; i<5; i++){
  i += angle;
         angle = angle+speed;  
}
    
}