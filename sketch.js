//Create variables here
var dog, happyDog, database,foodS, foodStock;
var dogimag1, dogimag2;
function preload()
{
  //load images here
  dogimag1= loadImage("images/dogImg1.png");
  dogimag2 = loadImage("images/dogImg2.png");
}

function setup() {
  var canvas = createCanvas(500, 500);
  database=firebase.database();

  var dog= createSprite(250, 250, 10, 10);
  dog.addImage(dogimag1);
  dog.scale= 0.2;

  foodStock=database.ref('Food');
  foodStock.on("value", readStock);
  
 
}


function draw() {  
background(46, 139, 87);

if (keyWentDown(UP_ARROW)) {
  writeStock(foodS);
  dog.addImage(dogimag2);
}
  drawSprites();
  //add styles here
  fill("blue");
  textSize(20);
  stroke(5);
  text("Press Up Arrow Kew To Feed drago milk", 80, 100);
  text("You have: " + foodS + " Milk left", 100, 70);
  console.log(foodS);

 

}

function readStock(data) {
  foodS = data.val();
}

//function to write values in database
function writeStock(x) {
  if(x<=0){
    x=0;
  }
  else
  {
    x=x-1;
  } 
  database.ref('/').update({
    Food: x
  });
}

