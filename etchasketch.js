const grid = document.querySelector('.sketch');
const resetButton = document.querySelector('.reset');
const sizeButton = document.querySelector('.changeSize');

const rowDiv = [];
const colDiv = [];

function createGrid(dimension = 16) {
    
    deleteGrid();
    
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

function deleteGrid() {
    if (rowDiv.length > 0) {
        for (let i = rowDiv.length - 1; i >= 0; i--) {
            // rowDiv[i].remove();
            grid.firstElementChild.remove();
        }
    }
}

resetButton.addEventListener('click', () => createGrid());
sizeButton.addEventListener('click', function (e) {
    let size = prompt("Please enter a positive number between 1 and 100:");
    createGrid(size);
});