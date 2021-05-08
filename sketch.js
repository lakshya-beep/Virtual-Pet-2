
var  dog, happyDog;

var database;
var foodS, foodStock;

var f;

var addfood;
var deductfood;
var showfood;


function preload()
{
  dogImg = loadImage("dogImg.png");
  dogImg1 = loadImage("dogImg1.png");
	//load images here
}

function setup() {
  createCanvas(1200,600);
  
  dog = createSprite(1000,250,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.3;
  
  database = firebase.database();



  var heading = createElement('h1');
  heading.html('VIRTUAL PET GAME');
  heading.position(450,30);

  addfood = createButton("add food");
  addfood.position(1000,50);
  
  deductfood = createButton("feed me");
  deductfood.position(1100,50);
  
  
  f = new Dogfood();


 // this.deductfood.mousePressed(f.deducter());

 deductfood.mousePressed(()=>{
  dog.addImage(dogImg1);
  if(showfood > 0){
    showfood -= 1;
  }
   // console.log(showfood);
   f.updatefood(showfood);
});

addfood.mousePressed(()=>{
  showfood+=1;
  f.updatefood(showfood);


})
  
}


function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
   // dog.addImage(dogImg1);
  }

  drawSprites();
  //add styles here
  strokeWeight(2)
  stroke("black");
  fill("black");

  if(showfood === 0 ){
    textSize(70);
    fill(187,182,51);
   textFont("forte");
    text("please add food", 200,150);

    textSize(20);
    fill(108,37,104);
   textFont("Prestige");
    text("Hint: see the add food button above", 200,200);
  }
  
  f.getFood();




  f.display();



}








































function writeStock (x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food: x 
  })

}

