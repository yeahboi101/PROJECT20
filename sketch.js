var bgimage
var cat,catImg1,catImg2,catImg3
var mouse,mouseImg1,mouseImg2,mouseImg3
function preload() {
    //load the images here
    bgimage=loadImage("images/garden.png")
    catImg1=loadAnimation("images/cat1.png")
    catImg2=loadAnimation("images/cat2.png","images/cat3.png")
    catImg3=loadAnimation("images/cat4.png")

    mouseImg1=loadAnimation("images/mouse1.png")
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseImg3=loadAnimation("images/mouse4.png")
    

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(870,600)
    cat.addAnimation("sleeping",catImg1)
    cat.scale=0.2
    mouse=createSprite(200,600)
    mouse.addAnimation("standing",mouseImg1)
    mouse.scale=0.15

}

function draw() {

    background(bgimage);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width -mouse.width)/2){
        cat.velocityX=0
        cat.addAnimation("collide",catImg3)
        cat.x=300
        cat.changeAnimation("collide")
        mouse.addAnimation("stop",mouseImg3)
        mouse.changeAnimation("stop")
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown("LEFT_ARROW")){
      cat.velocityX=-5;
      cat.addAnimation("running",catImg2)
      cat.changeAnimation("running")
      mouse.addAnimation("teasing",mouseImg2)
      mouse.frameDelay=25;
      mouse.changeAnimation("teasing")

  }
  
  


}
