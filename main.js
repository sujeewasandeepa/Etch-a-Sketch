const container = document.querySelector('#container');

container.style.width = '400px';
container.style.height = '500px';

function setUpGrid() {
    for(let i=0; i<16*16; i++) {
        const gridElement = document.createElement('div');
        gridElement.className = "gridElement";
        gridElement.addEventListener('mouseover', ()=>{
            gridElement.style.background = "white";
        });
        container.appendChild(gridElement);
    }
}


window.onload(setUpGrid());