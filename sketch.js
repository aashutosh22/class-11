var trex, trex_running, edges;
var groundImage;
var ground;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);

  edges = createEdgeSprites();

  ground=createSprite(300,180,600,10)
  //adding scale and position to trex
  ground.addImage(groundImage)

  trex.scale = 0.5;
  trex.x = 50

  inground = createSprite(300,190,600,10)
  inground.visible = false
}


function draw(){
  //set background color 
  background("pink");
  
  //logging the y position of the trex
  console.log(trex.y)
  
  //jump when space key is pressed
  if(keyDown("space")&&trex.y>100){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down
  trex.collide(inground)

  ground.velocityX=-2
  if(ground.x<0){
    ground.x=ground.width/2
  }
  
  drawSprites();
}