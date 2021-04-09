var cat,mouse,background;
var mouseImg1,catImg1,catImg2,mouseImg2,backgroundImg;


function preload() {
    //load the images here
catImg1=loadAnimation("images/cat1.png");
mouseImg1=loadAnimation("images/mouse1.png");
backgroundImg=loadImage("images/garden.png");
catImg2=loadAnimation("images/cat2.png","images/cat3.png");
mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(200,200,20,20);
cat.addAnimation(catImg1);
cat.scale=0.03;
cat.depth=background.depth;
cat.depth+=1;

mouse=createSprite(180,230,10,10);
mouse.addAnimation(mouseImg1);
mouse.scale=0.03;
mouse.depth=background.depth;
mouse.depth+=1;

background=createSprite(100,280,30,30);
background.addImage(backgroundImg);

}

function draw() {

  
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/2){

}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
mouse.addAnimation("mouseTeasing",mouseImg2);
mouse.changeAnimation("mouseTeasing");
mouse.frameDelay=25;
}
if(keyCode===RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay=25;
    }
}
