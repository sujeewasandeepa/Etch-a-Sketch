const container = document.querySelector('#container');

container.style.width = '400px';
container.style.height = '500px';

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

window.onload(setUpGrid());