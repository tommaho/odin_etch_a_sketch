// Etch-A-Sketch JS
// Author: tommaho

const gridSquares = 16;
const container = document.querySelector('#container');

const containerWidth = container.clientWidth;

const squaresPerRow = gridSquares / 4;

const squareWidth = containerWidth / squaresPerRow;

console.log(`Container width: ${containerWidth}.`);
console.log(`Square width: ${squareWidth}.`);

for (let i = 0; i < gridSquares; i++) {
  let nextCell = document.createElement('div');
  nextCell.style.height = squareWidth + 'px';
  nextCell.style.width = squareWidth + 'px';

  container.append(nextCell);
}
