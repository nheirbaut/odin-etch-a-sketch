function setGridSize() {
    const input = prompt("How many squares per edge? [1 - 100].");
    const gridSize = parseInt(input, 10);

    if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
        alert("Invalid input. Please enter an integer between 1 and 100.");
        return;
    }

    createGrid(gridSize);
}

function randomRGBValue() {
    return Math.floor(Math.random() * 256);
}

function createRandomColor() {
    return {
        r: randomRGBValue(),
        g: randomRGBValue(),
        b: randomRGBValue(),
    };
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

        let opacity = 0;
        const randomColor = createRandomColor();

        square.addEventListener('mouseover', () => {
            if (opacity < 1) {
                opacity = Math.min(opacity + 0.1, 1);
                square.style.backgroundColor = `rgba(${randomColor.r}, ${randomColor.g}, ${randomColor.b}, ${opacity})`;
            }
        });

        gridContainer.appendChild(square);
    }
}

createGrid(16);