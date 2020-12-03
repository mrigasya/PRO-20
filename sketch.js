var car
var wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1400,400);
  car=createSprite(50,200,50,50);
  wall=createSprite(1200,200,60,200);
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background("black");
  car.shapeColor="white";

  if(keyDown("space")){
    car.velocityX=speed
  }

if(wall.x - car.x<(car.width + wall.width)/2){
  car.velocityX=0
  var deformation=(0.5*speed*speed*weight)/22500;
  if( deformation<100){
    car.shapeColor=color(0,255,0);
    
   
  }
  else if( deformation<180 && deformation>100){
    car.shapeColor=color(230,230,0);
    
  }
  else if(deformation>180){
    car.shapeColor=color(255,0,0);
    
  }
}

  

  drawSprites();
}
