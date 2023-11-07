let grass
let bunny
let carrot
let size = 64

let andarX = 0
let andarY = 0

var random
var randomInterval

var positionX = 0
var positionY = 0

let button

function setup() {
  createCanvas(576, 576);
  //se 512 dividido por um numero dentro do intervalo de 0-512 
  //for diferente de 0, essa posição não pode ser utilizada
  random = Math.floor(Math.random() * 8) 
  randomInterval = random * 64
  


  grass = loadImage('grass.png')
  bunny = loadImage('bunny.png')
  carrot = loadImage('cenoura.png')
}

function draw() {
  background(220);

 for (let x = 0; x < 9; x++) {
  for (let y = 0; y < 9; y++) {
    image(grass, x*size, y*size, size, size)
  }
 }
  
  image(carrot, randomInterval, randomInterval, size, size)
  
  image(bunny, andarX, andarY, size, size)
  
  if (andarX === randomInterval && andarY === randomInterval) {
    rect(160,160,256,256,30)
    textSize(35)
    text('GANHOU!', 200, 300)

    button = createButton('Reiniciar')
    button.position(250,320)
    button.mousePressed(reset)
    noLoop()
  }
}

function reset () {
  andarX = 0
  andarY = 0
  random = Math.floor(Math.random() * 8) 
  randomInterval = random * 64
  positionX, positionY = randomInterval
  button.remove()

  loop()
}

function keyPressed() {
  if(keyIsDown(RIGHT_ARROW) && andarX < 512) {
    andarX += 64
  }
  if(keyIsDown(LEFT_ARROW) && andarX > 0) {
    andarX -= 64
  }
  if(keyIsDown(DOWN_ARROW) && andarY < 512) {
    andarY += 64
  }
  if(keyIsDown(UP_ARROW) && andarY > 0) {
    andarY -= 64
  }


}



