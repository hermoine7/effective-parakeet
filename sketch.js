var rain1 =[]
var one= "12345678Abcde@#!$%^&*()_+";



function setup() {
  createCanvas(2000,600);
  
    frameRate(25);
    
    for(var i=0;i<150;i++)
    {
        rain1.push(new rain());
    }
  
}

function draw() {

  background("black");  
  for(var i=0;i<rain1.length;i++)
  {
      rain1[i].draw();
      rain1[i].update();
  }
  
}