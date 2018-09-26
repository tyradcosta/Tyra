var mouseclicks = [];


function setup(){
	createCanvas(720,480);
	var button = createButton('click me');
	button.mousePressed(addparticle);
	noStroke();
    
	//setTimeout(1000, gosomeplaceelse);
    	    background(0);
}
/*
function gosomeplaceelse(){
	window.location = "www.google.ca";
}
*/
function draw(){
    
    bounce();
   

    
	for(var i = 0; i < mouseclicks.length; i++){
        
		fill(mouseclicks[i].color);
ellipse(mouseclicks[i].x,mouseclicks[i].y,mouseclicks[i].r);
        
        mouseclicks[i].x = mouseclicks[i].x + mouseclicks[i].xspeed;
		mouseclicks[i].y = mouseclicks[i].y + mouseclicks[i].yspeed;
    	
        
	}
    
    
    
	}
    
      

function addparticle(){
    
//    var speedvar
    
    
//    if( addparticle.r > 5){ let speedvar = 2}
//    else {let speedvar = 3}
    
	var clickposition = {
		x: random(width),
		y: 0,
        r: random(10,14),
      xspeed: random(-5,5),
      yspeed: 5,
		color: color(random(100,150), random(255), random(200,255))
        
	}
	mouseclicks.push(clickposition);
}



function bounce(){

  
    
    
if(mouseclicks.x > width){mousclicks.xspeed = mousclicks.xspeed * -1}; 
	if(mouseclicks.x<0){mousclicks.xspeed += mousclicks.xspeed * -1}; 
	if(mouseclicks.y >height){mousclicks.yspeed += mousclicks.yspeed* -1}; 
	if(mouseclicks.y<0){mousclicks.yspeed += mousclicks.yspeed* -1};

      mouseclicks.x = mouseclicks.x + mouseclicks.yspeed;
mouseclicks.y = mouseclicks.y + mouseclicks.dy;

}



