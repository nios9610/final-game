function preload()    {
bg=loadImage("space image.png")
surface1=loadImage("moon surface.png")
spaceCraftimg=loadImage("spacecraft.png")
obstaclesimg=loadImage("meteor (1).png")
obstacles2=loadImage("meteor (1).png")
resetimg=loadImage("reset1.png")
blastSound=loadSound("blast.mp3")
winSound=loadSound("win.mp3")

}
function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
surface=createSprite(700,350,200,100);
surface.addImage(surface1)
surface.scale=0.4

spaceCraft=createSprite(50,300,100,100);
spaceCraft.addImage(spaceCraftimg)
spaceCraft.scale=0.3

obstacles=createSprite(450,250,50,50);
obstacles.addImage(obstaclesimg)
obstacles.scale=0.5

obstacles1=createSprite(700,80,50,50);
obstacles1.addImage(obstacles2)
obstacles1.scale=0.6

obstacles2=createSprite(200,150,50,50);
obstacles2.addImage(obstaclesimg)
obstacles2.scale=0.3

invisibleSprite=createSprite(700,370,40,40);
invisibleSprite.visible=false

reset=createSprite(430,270,50,50)
reset.visible=false
reset.addImage(resetimg)
reset.scale=0.4

spaceCraft.debug=true
obstacles.debug=true
obstacles1.debug=true
obstacles2.debug=true
surface.debug
obstacles.setCollider("circle",0,0,50)
obstacles1.setCollider("circle",0,0,50)
obstacles2.setCollider("circle",0,0,50)
}

function draw() {
  background(bg); 
  //addImage("moon surface.jpg") 

 if(keyDown("UP_ARROW")){
spaceCraft.y-=5
}
 if(keyDown("RIGHT_ARROW")){
spaceCraft.x+=5
 }
 if(keyDown("DOWN_ARROW")){
   spaceCraft.y+=5
 }
 if(keyDown("LEFT_ARROW")){
   spaceCraft.x-=5
 }
 if(spaceCraft.isTouching(obstacles)){
   spaceCraft.x=50;spaceCraft.y=300
   blastSound.play();
  }

if(spaceCraft.isTouching(obstacles1)){
  spaceCraft.x=50;spaceCraft.y=300
  blastSound.play();
}

if(spaceCraft.isTouching(obstacles2)){
  spaceCraft.x=50;spaceCraft.y=300
  blastSound.play();
}

if(spaceCraft.isTouching(invisibleSprite)){
  reset.visible=true
  textSize(100)
  fill("yellow")
  text("YOU WON",200,200)
  obstacles.remove();
  obstacles1.remove();
  obstacles2.remove();
  winSound.play();
}
if(mousePressedOver(reset)){
  window.location.reload()
}


  drawSprites()

  }