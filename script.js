// Etch-A-Sketch JS
// Author: tommaho

const defaultColor = 'cornflowerblue';
const selectedColor = 'grey';

function initializeGrid(gridSquares = 16) {
  //const gridSquares = 16;
  const container = document.querySelector('#container');
  const containerWidth = container.clientWidth;
  const squaresPerRow = Math.sqrt(gridSquares);
  const squareWidth = containerWidth / squaresPerRow - 2; //-2 for border

  for (let i = 0; i < gridSquares; i++) {
    let nextCell = document.createElement('div');

    nextCell.style.height = squareWidth + 'px';
    nextCell.style.width = squareWidth + 'px';
    nextCell.className = 'grid-square';
    nextCell.id = 'grid-square-' + i;

    // function changeColor(gridSquare) {
    //     let target = document.querySelector('#' + gridSquare);
    //     target.style.backgroundColor = selectedColor;
    //     target.classList.add('touched');
    //   }

    nextCell.addEventListener('mouseover', (e) => {
      // changeColor(nextCell.id);
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

  initializeGrid();
});

resetButton.addEventListener('click', () => {
  const touchedGridSquares = document.querySelectorAll('.touched');
  touchedGridSquares.forEach((square) => {
    square.style.backgroundColor = defaultColor;
    square.classList.remove('touched');
  });
});

// console.log(`Container width: ${containerWidth}.`);
// console.log(`Square width: ${squareWidth}.`);
