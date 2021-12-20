const container = document.querySelector('#container');
const resetBtn = document.querySelector('#resetBtn');
const selectClr = document.querySelector('#selectClr');
const selectSize = document.querySelector('#selectSize');

let brushClr = 'black';
let size = 25;

selectClr.addEventListener('change', chooseColor);
selectSize.addEventListener('change', changeSize);

resetBtn.addEventListener('click', reset);

function setUpGrid() {

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for(let i=0; i<size*size; i++) {
        const gridElement = document.createElement('div');
        gridElement.className = "gridElement";
        gridElement.addEventListener('mouseover', () => {
            gridElement.style.background = brushClr;
        });
        container.appendChild(gridElement);
    }
}

function reset() {
    container.innerHTML = '';
    setUpGrid();
}

function chooseColor() {
    brushClr = selectClr.value;
}

function chooseSize() {
    let tempSize = selectSize.value;
    if(tempSize <= 100 && tempSize >= 1) {
        size = tempSize;
    }else {
        alert("Please enter a value between 1 and 101");
        size = 25;
    }
}

function changeSize() {
    chooseSize();
    reset();
}

window.onload = setUpGrid();