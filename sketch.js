let x = 100 
let r = 100

let rP = 60
let poeng = 0

let f = 1

let level = 1

let ekstra = 0.5


let p = 1



function setup() {
  createCanvas(500, 400 );
 
}

function draw() {
  background(0,0,100);

 // noStroke()
  //tegner panekake
  fill(255,170,0)
circle (r,x,rP)
  
  //fart
  x = x + f
  
figur()
  
if ( x > height + 30) {
  x = 0
 r = random(1,width)
  
  poeng = poeng - 1
 f = 0

 
  fill(55,0,0)
  
  
}

let avstand = dist (mouseX , height - 16, r, x)

if (  avstand < 80  ){
  
    r = random(1,width) 

    x = 0
  
//poeng = poeng + 1

p = p + 1
f = f + 1
}
 
  
 
 textSize(20);
  
stroke (255, 204, 0)
  
  text( level, 55, 30);
  
  
  
    stroke(255, 204, 0);
  
   text( "level", 5, 30);
  
  stroke(0, 200, 0);
  text("poeng",width - 85,30)
  text(p,width - 20,30)
  
  
  stroke(100, 0, 0);
  if (poeng < 0){
    text ("GAME OVER!!!",width/3.3,70,200,)
     text ("GAME OVER!!!",width/3.3,90,200,)
      text ("GAME OVER!!!",width/3.3,110,200,)
    text ("GAME OVER!!!",width/3.3,130,200,)
     text ("GAME OVER!!!",width/3.3,150,200,)
      text ("GAME OVER!!!",width/3.3,170,200,)
    noLoop()
  
   stroke(200,200,200)
  text("du komm i level" , width/3.3,260,)
  text(level , width/3.3 + 150,260,)
  
  }
  stroke(0,0,0)
  
  
  
  
  print (f)
  
  if (p > 10){
    f = 2 + ekstra
    
    level = level + 1
    
    ekstra = ekstra + 1.5
  
  p = 1
  
  }
  
  
  
  
  
  

  function figur(){
    //player
    
    
    
    
  
  fill (85,85,85)
  rect (mouseX - 40,height - 70,80,40)
    
  }
  
 
  
}

