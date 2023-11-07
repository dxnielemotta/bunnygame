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
