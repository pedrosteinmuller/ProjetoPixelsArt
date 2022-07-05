const colorsPallete = document.querySelectorAll('.color');
const lista = ['#000', '#f00', '#00f', '#008000'];

function createColors() {
  for (let index = 0; index < colorsPallete.length; index += 1) {
    colorsPallete[index].style.backgroundColor = lista[index];
  }
}

createColors();

//Criando o pixel board 5x5 dinamicamente
let board = document.querySelector('#pixel-board');
for (let index = 1; index <= 25; index += 1) {
  let divs = document.createElement('div');
  divs.classList.add('pixel');
  divs.style.backgroundColor = '#fff';
  board.appendChild(divs);
}

let colors = document.querySelectorAll('.color');

for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', function (e) {
    for (let a of colors) {
      if (a.classList.contains('selected')) {
        a.classList.remove('selected');
      }
    }
    e.target.classList.add('selected');
  });
}


let selected = document.getElementsByClassName('selected')
let pixelsPai = document.getElementById('pixel-board')

pixelsPai.addEventListener('click', function(event){
  // pegar o elemento selecionado e passar o valor da cor para o quadrado clicado
  let corDoElemento = selected[0].style.backgroundColor;
  event.target.style.backgroundColor = corDoElemento;
})

let botao = document.getElementById('clear-board')

botao.addEventListener('click', function(){
  console.log('entrei')
})

let pixels = document.getElementsByClassName('pixel')
let clearBoardButton = document.getElementById('clear-board')

clearBoardButton.addEventListener('click', function(clearBoardButton){
for (let pixel of pixels){
  pixel.style.backgroundColor = 'white';
}
})


// px = document.querySelector(.pixel)
// limpar.addEventListener('click', clearBoard);
// clearboard for let index = 0, index < 0; i +=1
// px[index].style.backgroundColor = 'white'









































// outra forma de resolver o requisito 7, mas nao consegui raciocinar para finalizar, entao segui outra logica para resolucao

// let selected = 'cor1';
// let color1 = document.querySelector('.cor1');
// let color2 = document.querySelector('.cor2');
// let color3 = document.querySelector('.cor3');
// let color4 = document.querySelector('.cor4');

// color1.addEventListener('click', function() {
//   color2.classList.remove('selected');
//   color3.classList.remove('selected');
//   color4.classList.remove('selected');
//   color1.classList.add('selected');
//   selected = 'cor1';
// });

// color2.addEventListener('click', function() {
//     color1.classList.remove('selected');
//     color3.classList.remove('selected');
//     color4.classList.remove('selected');
//     color2.classList.add('selected');
//     selected = 'cor2';
//   });

//   color3.addEventListener('click', function() {
//     color1.classList.remove('selected');
//     color2.classList.remove('selected');
//     color4.classList.remove('selected');
//     color3.classList.add('selected');
//     selected = 'cor3';
//   });

//   color3.addEventListener('click', function() {
//     color1.classList.remove('selected');
//     color2.classList.remove('selected');
//     color3.classList.remove('selected');
//     color4.classList.add('selected');
//     selected = 'cor4';
//   });
