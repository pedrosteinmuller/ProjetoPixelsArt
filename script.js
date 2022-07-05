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

let selected = document.getElementsByClassName('selected');
let pixelsPai = document.getElementById('pixel-board');

pixelsPai.addEventListener('click', function (event) {
  // pegar o elemento selecionado e passar o valor da cor para o quadrado clicado
  let corDoElemento = selected[0].style.backgroundColor;
  event.target.style.backgroundColor = corDoElemento;
});

let pixels = document.getElementsByClassName('pixel');
let clearBoardButton = document.getElementById('clear-board');

clearBoardButton.addEventListener('click', function (clearBoardButton) {
  for (let pixel of pixels) {
    pixel.style.backgroundColor = 'white';
  }
});

// bonus 10

let inputBoardSize = document.querySelector('#board-size');
let buttonGenerateBoard = document.querySelector('#generate-board');

buttonGenerateBoard.addEventListener('click', function () {
  if (inputBoardSize.value === '') {
    return alert('Board inválido!');
  } else {
    let boardSizeNumber = parseInt(inputBoardSize.value);
    if (boardSizeNumber > 50) {
      boardSizeNumber = 50;
    }
    for (
      let index = 1;
      index <= boardSizeNumber * boardSizeNumber - 25;
      index += 1
    ) {
      let boardNovo = document.createElement('li');
      boardNovo.className = 'pixel white';
      board.appendChild(boardNovo);
    }
  }
});

// bonus 12

function colorGenerator() {
  let aleatoryColor = ['rgb(0,0,0)'];

  for (let x = 0; x < 3; x += 1) {
    let colorRgb = `rgb( ${Math.round(Math.random() * 255)}, ${Math.round(
      Math.random() * 255
    )}, ${Math.round(Math.random() * 255)})`;
    aleatoryColor.push(colorRgb);
  }
  return aleatoryColor;
}

function randomColors() {
  let cores = document.getElementsByClassName('color');
  let colorgenerator = colorGenerator();
  for (let i = 1; i < cores.length; i++) {
    cores[i].style.backgroundColor = colorgenerator[i];
  }
}

randomColors();