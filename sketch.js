var cat
var mouse
var garden
var mouseAnimation,catAnimation,gardenImg,cat_Running,cat_Sitting,mouse2,mouse3

function preload() {
    //load the images here
    catAnimation = loadAnimation("images/cat1.png")
    cat_Running = loadAnimation("images/cat2.png","images/cat3.png")
    cat_Sitting  = loadAnimation("images/cat4.png")
    mouseAnimation = loadAnimation ("images/mouse1.png")
    mouse2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    mouse3 = loadAnimation("images/mouse4.png")
    gardenImg = loadImage ("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(900,400)
    cat.addAnimation("cat", catAnimation)
    cat.addAnimation("catRunning", cat_Running)
    cat.addAnimation("catSitting", cat_Sitting)
    cat.scale = 0.15

    mouse = createSprite(100,400)
    mouse.addAnimation("mouse", mouseAnimation)
    mouse.addAnimation("mouse4", mouse2)
    mouse.addAnimation("mouse5", mouse3)
    mouse.scale = 0.15


}

function draw() {

    background(gardenImg);

    keyPressed()

    //Write condition here to evalute if tom and jerry collide
    if(cat.isTouching(mouse)){
       cat.changeAnimation("catSitting", cat_Sitting)
        mouse.changeAnimation("mouse5", mouse3)
        cat.velocityX = 0
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown("space")){
      cat.velocityX = -3
      cat.changeAnimation("catRunning", cat_Running)
      mouse.changeAnimation("mouse4", mouse2)
  }

}
