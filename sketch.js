function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(500,200,50,50);
  burger=createSprite(600,200,50,50);
  pizza=createSprite(600,500,50,50);
  burger.velocityY=2
  pizza.velocityY=-2
}

function draw() {
  background(255,255,255); 
  movingrect.y=mouseY
  movingrect.x=mouseX 
  if(fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
    &&movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
    &&fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2
    &&movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2){
      movingrect.shapeColor="blue"
      fixedrect.shapeColor="blue"
     
    }
   else{
     movingrect.shapeColor="black"
     fixedrect.shapeColor="black"
   }
burger.shapeColor="orange"
pizza.shapeColor="brown"
if(burger.x-pizza.x<burger.width/2+pizza.width/2
  &&pizza.x-burger.x<burger.width/2+pizza.width/2)
  {
    burger.velocityX=burger.velocityX*(-1)
    pizza.velocityX=pizza.velocityX*(-1)

  }
if(burger.y-pizza.y<burger.height/2+pizza.height/2
  &&pizza.y-burger.y<burger.height/2+pizza.height/2)
  {
    burger.velocityY=burger.velocityY*(-1)
    pizza.velocityY=pizza.velocityY*(-1)

  }
  drawSprites();
}