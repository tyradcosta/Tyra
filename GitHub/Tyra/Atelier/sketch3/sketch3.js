


function setup(){
    
 createCanvas(720,480);
    

}



function draw(){
    
    background(0);
    
    
   
    
    for(var i = 0; i <10; i++){
line(mouseX,mouseY, random(width), random(height));
 stroke("yellow");
  }
}

