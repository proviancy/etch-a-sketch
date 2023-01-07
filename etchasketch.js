const grid = document.querySelector('.sketch');
const resetButton = document.querySelector('.reset');
const sizeButton = document.querySelector('.changeSize');

const rowDiv = [];
const colDiv = [];
let size = 16;

function createGrid(dimension = 16) {
    
    deleteGrid();
    
    for (let i = 0; i < dimension; i++) {

        rowDiv[i] = document.createElement('div');
        grid.appendChild(rowDiv[i]);
        rowDiv[i].classList.add('row','container')

        for (let x = 0; x < dimension; x++) {
            
            colDiv[x] = document.createElement('div');
            rowDiv[i].appendChild(colDiv[x]);
            colDiv[x].classList.add('cell');
            colDiv[x].addEventListener('mouseover', function(e) {
                e.target.classList.add('hovered');
            });

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

function resetGrid() {
    createGrid(size);
}

resetButton.addEventListener('click', resetGrid);
sizeButton.addEventListener('click', function (e) {
    size = prompt("Please enter a positive number between 2 and 100:");
    
    // while (!(size >= 2 && size <= 100)) {
    //     size = prompt("Please try again. Enter a positive number between 2 and 100:");       
    // }

    createGrid(size);
     
});