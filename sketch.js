var tower,towerImage;
var door,doorImage,doorGroups;
var climber,climbersImage,climbersGroup;
var ghost,ghostImage;
var invisibleblock,inisibleGrp;
var gameState = "play"
var spookySound
function preload() {
  towerImage = loadImage("tower.png")
  
  doorImage = loadImage("door.png")
  
  climbersImage = loadImage("climber.png")
  
  ghostImage = loadImage("ghost-standing.png")
   spookySound = loadSound("spooky.wav")
}
function setup(){
 createCanvas(600,600);
  spookySound.loop();
  tower = createSprite(300,300);
  tower.addImage(towerImage);
  tower.velocityY = 4;
  doorGroups = new Group();
  climbersGroup = new Group();
  invisibleGrp = new Group();
  ghost = createSprite(300,300,50,50)
  ghost.addImage(ghostImage)
  ghost.scale = 0.5
}



function draw(){
  background("black");
  
  if(gameState==="play"){
    
  
  if(tower.y>400){
    tower.y = 300;
    
  }
  if(keyDown("left_arrow")){
    ghost.x = ghost.x-2
  }
  if(keyDown("right_arrow")){
    ghost.x = ghost.x+2
  }
  if(keyDown("space")){
    ghost.velocityY = -2;  
  }
 ghost.velocityY=ghost.velocityY+0.5; 
  if(climbersGroup.isTouching(ghost)){
    ghost.velocityY = 0
  }
  if(invisibleGrp.isTouching(ghost)||ghost.y>600){
    ghost.destroy();
    gameState = "end"
  }
  
  
  spawnDoor();
  }
  
  drawSprites();
  if(gameState==="end"){
    fill("red")
    textSize(30)
    text("GAME OVER",300,300)
    
  }
}

function spawnDoor(){
  if(frameCount%200===0){
    door = createSprite(200,-50)
    door.addImage(doorImage)
    
    
    
    climber = createSprite(200,10);
    climber.addImage(climbersImage)
    
    invisibleblock = createSprite(200,15)
    invisibleblock.width = climber.width
    invisibleblock.height = 2
    
    door.x = Math.round(random(120,400));
    door.velocityY = 4
    
    climber.x = door.x;
    climber.velocityY = 4;
    invisibleblock.x = door.x
    invisibleblock.velocityY = 4;
    invisibleblock.lifetime = 800;
    
    
   ghost.depth = door.depth
    
    ghost.depth = ghost.depth+1
    
    door.lifetime = 800;
     climber.lifetime = 800;
    doorGroups.add(door)
    climbersGroup.add(climber)
    invisibleGrp.add(invisibleblock)
  }
}















