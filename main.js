const container = document.querySelector('#container');
const resetBtn = document.querySelector('#resetBtn');
const newColor = document.querySelector('#selectClr');

resetBtn.addEventListener('click', reset);

function setUpGrid() {
    for(let i=0; i<25; i++) {
        for(let j=0; j<25; j++) {
            const gridElement = document.createElement('div');
            gridElement.className = "gridElement";
            gridElement.addEventListener('mouseover', () => {
                gridElement.style.background = 'black';
            });
            container.appendChild(gridElement);
        }
    }
}

function reset() {
    container.innerHTML = '';
    setUpGrid();
}

function chooseColor() {

}

window.onload(setUpGrid());