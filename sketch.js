var fixedrect,movingrect;
var g1,g2,g3;


function setup() {
  createCanvas(1200,800);
 fixedrect= createSprite(400,100, 50, 80);
 fixedrect.shapeColor="green";
 fixedrect.debug=true;

 movingrect=createSprite(400,800,80,30);
 movingrect.shapeColor="green";
 movingrect.debug=true;
g1=createSprite(100,100,50,50);
g1.shapeColor="green";
g2=createSprite(200,100,50,50);
g2.shapeColor="green";
g3=createSprite(300,100,50,50);
g3.shapeColor="green";

}

function draw() {
  background(0); 
  movingrect.y=World.mouseY;
  movingrect.x=World.mouseX;
if(hitanshu(movingrect,g1)){
  movingrect.shapeColor="purple";
  g1.shapeColor="red";

}
  else{
    movingrect.shapeColor="green";
    g1.shapeColor="green";
  }
  if(hitanshu(movingrect,g2)){
    movingrect.shapeColor="purple";
    g2.shapeColor="pink";
  
  }
    else{
      movingrect.shapeColor="green";
      g2.shapeColor="green";
    }
  drawSprites();
}
function hitanshu(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2&&
    object2.x-object1.x<object2.width/2+object1.width/2&&
    object1.y-object2.y<object2.height/2+object1.height/2&&
    object2.y-object1.y<object2.height/2+object1.height/2){
     return true;

    }
  else {  
  return false;
  }
}




