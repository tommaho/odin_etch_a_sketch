// Etch-A-Sketch JS
// Author: tommaho

const gridSquares = 16;
const container = document.querySelector('#container');

const containerWidth = container.clientWidth;

const squaresPerRow = gridSquares / 4;

const squareWidth = containerWidth / squaresPerRow - 2; //-2 for border

console.log(`Container width: ${containerWidth}.`);
console.log(`Square width: ${squareWidth}.`);

for (let i = 0; i < gridSquares; i++) {
  let nextCell = document.createElement('div');

  nextCell.style.height = squareWidth + 'px';
  nextCell.style.width = squareWidth + 'px';
  nextCell.className = 'grid-square';
  nextCell.id = 'grid-square-' + i;

  nextCell.addEventListener('click', (e) => {
    changeColor(nextCell.id);
  });

  container.append(nextCell);
}

function changeColor(gridSquare) {
  let target = document.querySelector('#' + gridSquare);
  target.style.backgroundColor = 'red';
}
