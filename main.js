const container = document.querySelector('#container');
const resetBtn = document.querySelector('#resetBtn');
const selectClr = document.querySelector('#selectClr');

let brushClr = 'black';
selectClr.addEventListener('change', chooseColor);

resetBtn.addEventListener('click', reset);

function setUpGrid() {
    for(let i=0; i<25; i++) {
        for(let j=0; j<25; j++) {
            const gridElement = document.createElement('div');
            gridElement.className = "gridElement";
            gridElement.addEventListener('mouseover', () => {
                gridElement.style.background = brushClr;
            });
            container.appendChild(gridElement);
        }
    }
}

function reset() {
    container.innerHTML = '';
    setUpGrid();
}

chooseColor();
function chooseColor() {
    brushClr = selectClr.value;
}

window.onload = setUpGrid();