// Etch-A-Sketch JS
// Author: tommaho

const defaultColor = 'cornflowerblue';
const selectedColor = 'grey';

function initializeGrid(gridSize = 16) {
  const container = document.querySelector('#container');
  const containerWidth = container.clientWidth;
  const squaresPerRow = Math.sqrt(gridSize);
  const squareWidth = containerWidth / squaresPerRow - 2; //-2 for border

  for (let i = 0; i < gridSize; i++) {
    let nextCell = document.createElement('div');

    nextCell.style.height = squareWidth + 'px';
    nextCell.style.width = squareWidth + 'px';
    nextCell.className = 'grid-square';
    nextCell.id = 'grid-square-' + i;

    nextCell.addEventListener('mouseover', (e) => {
      let target = document.querySelector('#' + nextCell.id);
      target.style.backgroundColor = selectedColor;
      target.classList.add('touched');
    });

    container.append(nextCell);
  }
}

const resetButton = document.querySelector('#reset');
const newLayoutButton = document.querySelector('#new');

newLayoutButton.addEventListener('click', () => {
  const gridSquares = document.querySelectorAll('.grid-square');
  gridSquares.forEach((square) => {
    square.remove();
  });

  const gridSize = prompt('Enter a grid size:', 16);

  initializeGrid(gridSize);
});

resetButton.addEventListener('click', () => {
  const touchedGridSquares = document.querySelectorAll('.touched');
  touchedGridSquares.forEach((square) => {
    square.style.backgroundColor = defaultColor;
    square.classList.remove('touched');
  });
});
