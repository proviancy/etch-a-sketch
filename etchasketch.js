const grid = document.querySelector('.sketch');
const resetButton = document.querySelector('.reset');

const rowDiv = [];
const colDiv = [];

function createGrid(dimension = 16) {
    
    for (let i = 0; i < dimension; i++) {

        rowDiv[i] = document.createElement('div');
        grid.appendChild(rowDiv[i]);
        rowDiv[i].classList.add('row','container')

        for (let x = 0; x < dimension; x++) {
            
            colDiv[x] = document.createElement('div');
            rowDiv[i].appendChild(colDiv[x]);
            colDiv[x].classList.add('cell')

        }

    }

    console.log(dimension);

}

resetButton.addEventListener('click', () => createGrid());