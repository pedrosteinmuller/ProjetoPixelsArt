const colorsPallete = document.querySelectorAll(".color")
const lista = ["#000","#f00","#00f","#008000" ];

function createColors() {
    for(let index = 0; index < colorsPallete.length; index+= 1) {
        colorsPallete[index].style.backgroundColor = lista[index];
    }
}
createColors();