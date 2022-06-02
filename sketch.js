var trashy,trashyImg
var backgroundImg
var plasticBottle,plasticBottleImg

function preload() {
  trashyImg = loadImage("trashy.png")
  backgroundImg = loadImage("grassBackground.png")
  plasticBottleImg = LoadImage("plasticBottle.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  trashy = createSprite(100,400,50,50)
  trashy.addImage(trashyImg)
  trashy.scale = 0.01
}

function draw() {
  background(backgroundImg);
  drawSprites()
  spawnTrash()
  //movements
  if(keyDown("UP_ARROW")){
    trashy.y = trashy.y-10
  }
  if(keyDown("DOWN_ARROW")){
    trashy.y = trashy.y+10

  }

  
}

function spawnTrash() {
  
  if(frameCount%80 == 0){
    plasticBottle = createSprite(50,50,50,50);
    plasticBottle.addImage(plashttps://codeprojects.org/wa8wxRxCaSnaJTu7bfrNQYNknD5K0Pz7qQ3rHLhY5QE/pin-pong.PNGticBottleImg);
    plasticBottle.velocityY = 4
    plasticBottle.life = 1000
  }
    
}