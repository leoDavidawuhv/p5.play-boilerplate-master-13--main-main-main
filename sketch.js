var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup(){
  createCanvas(1200,800);
  fixedRect = createSprite(200,200,50,50);
  fixedRect.shapeColor="green";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor="green";
  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor="brown";
  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor="yellow";
  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor="pink";
  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor="white";
}

function draw(){
  background("#748A93");
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(isTouching(movingRect, gameObject1)){
    movingRect.shapeColor="blue";
     gameObject1.shapeColor="blue";
  }
  else{
    movingRect.shapeColor="green";
     gameObject1.shapeColor="brown";
  }
  drawSprites();
}

//BOOLEANOS
//False
//True
