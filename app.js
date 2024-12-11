
function createGrid(squaresPerRow) {
    const gridContainer = document.getElementById('grid-container');
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