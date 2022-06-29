// Takes an odd number (n) and outputs a four-pointed diamond in an n x n grid.

'use strict';

function diamond(nLines) {
  let nStars = 1;
  const halfIndex = (nLines - 1) / 2;

  for (let i = 0; i < nLines; i += 1) {
    printLine(nLines, nStars);

    if (i < halfIndex) {
      nStars += 2
    } else {
      nStars -=2
    }
  }
}

function printLine(nLines, nStars) {
  const nSpaces = (nLines - nStars) / 2
  console.log(multiply(' ', nSpaces) + multiply('*', nStars));
}

function multiply(char, count) {
  let newString = '';
  for (let i = 0; i < count; i += 1) {
    newString += char;
  }

  return newString;
}

console.log(diamond(9));
