var rockImage, paperImage, scissorImage;
var database;
var rockRadio, paperRadio, scissorsRadio;
var uncheckedRadio, checkedRadio;

function preload(){
  rockImage=loadImage("images/rock.png");
  paperImage=loadImage("images/paper.png");
  scissorsImage=loadImage("images/scissors.png");

  uncheckedRadio=loadAnimation("images/unmarked-radio.png");
  checkedRadio=loadAnimation("checked","images/marked-radio.png");
}

function setup(){
  createCanvas(1200, 600);

  database = firebase.database();
}

function draw(){
  background(225);

  var rand = Math.round(random(1,3));

  textSize(20);
  text("Rock" ,420, 355);

  rockRadio = createSprite(400, 350, 20, 20);
  rockRadio.addAnimation("unchecked",uncheckedRadio);
  rockRadio.scale=0.15;

  textSize(20);
  text("Paper" ,520, 355);

  paperRadio = createSprite(500, 350, 20, 20);
  paperRadio.addAnimation("unchecked",uncheckedRadio);
  paperRadio.scale=0.15;

  textSize(20);
  text("Scissors" ,620, 355);

  scissorsRadio = createSprite(600, 350, 20, 20);
  scissorsRadio.addAnimation("unchecked",uncheckedRadio);
  scissorsRadio.scale=0.15;

  if(mousePressedOver(rockRadio)){
    rockRadio.changeAnimation("checked",checkedRadio);
    rockRadio.scale=0.15;
    console.log(1);

    paperRadio.addAnimation("checked",uncheckedRadio);
    paperRadio.scale=0.15;

    scissorsRadio.addAnimation("checked",uncheckedRadio);
    scissorsRadio.scale=0.15;
  }

  if(mousePressedOver(paperRadio)){
    paperRadio.addAnimation("checked",checkedRadio);
    paperRadio.scale=0.15;
    console.log(2);
  }

  if(mousePressedOver(scissorsRadio)){
    scissorsRadio.addAnimation("checked",checkedRadio);
    scissorsRadio.scale=0.15;
    console.log(3);
  }

  /*if(frameCount%80){
    switch(rand){
      case 1: console.log("Bot's choice is rock")
      break;
      case 2: console.log("Bot's choice is paper")
      break;
      case 3: console.log("Bot's choice is scissors")
      break;
      default:  break
    }
  }*/  

  drawSprites();
}