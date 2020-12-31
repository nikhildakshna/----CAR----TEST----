var car, wall;
var speed, weight;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  
speed = random(50,150);
weight = random(400,1500);

//create car sprite
car = createSprite(20,200,20,20);
car.velocityX = speed
//wcreate wall Sprite
wall = createSprite(750,200,20,400);
}

function draw() {
  background(255,255,255);
  if(wall.x-car.x < (car.width+wall.width)/2){
  	car.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22500;
    console.log(deformation);
    if(deformation >= 180){
    car.shapeColor = "red";
    wall.shapeColor = "red";
    console.log("red");
    }
    else if(deformation < 180 && deformation > 80){
    car.shapeColor = "yellow";
    wall.shapeColor = "yellow";
    console.log("yellow");
    }
    else if(deformation <= 80){
    car.shapeColor = "green";
    wall.shapeColor = "green";
    console.log("green");
    }
  } 
  drawSprites();
}