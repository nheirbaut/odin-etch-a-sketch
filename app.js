function setGridSize() {
    const input = prompt("How many squares per edge? [1 - 100].");
    const gridSize = parseInt(input, 10);

    if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
        alert("Invalid input. Please enter an integer between 1 and 100.");
        return;
    }

    createGrid(gridSize);
}


function createGrid(squaresPerRow) {
    const gridContainer = document.getElementById('grid-container');

    gridContainer.innerHTML = '';

    const gridContainerWidth = gridContainer.offsetWidth;
    const squareSize = gridContainerWidth / squaresPerRow;

    for (let i = 0; i < squaresPerRow * squaresPerRow; i++) {
        const square = document.createElement('div');

        square.classList.add('square');

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener('mouseover', e => {
            square.style.backgroundColor = 'black';
        });

        gridContainer.appendChild(square);
    }
}

createGrid(16);