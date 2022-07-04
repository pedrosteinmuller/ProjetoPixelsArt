const colorsPallete = document.querySelectorAll(".color")
const lista = ["#000","#f00","#00f","#008000"];

function createColors() {
    for(let index = 0; index < colorsPallete.length; index+= 1) {
        colorsPallete[index].style.backgroundColor = lista[index];
    }
}

createColors();

//Criando o pixel board 5x5 dinamicamente

for (let index = 1; index <= 25; index += 1) {
    let board = document.querySelector('#pixel-board');
    let divs = document.createElement('div');
    divs.classList.add('pixel');
    divs.style.backgroundColor = '#fff';
    board.appendChild(divs);
  }
  