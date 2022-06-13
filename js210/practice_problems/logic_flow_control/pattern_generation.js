// Takes a number between 2 and 9 (inclusive) and outputs rows with 'n'
// columns, where 'n' is equal to the number. The rows are comprised of
// a combination of '*' and numbers.

function generatePattern(nStars) {
  let finalRowString = '';
  for (let digit = 1; digit <= nStars; digit++) {
    finalRowString += String(digit);
  }

  let finalRowLength = finalRowString.length;

  for (let lineNumber = 1; lineNumber <= nStars; lineNumber++) {
    let string = '';

    for (let digit = 1; digit <= lineNumber; digit++) {
      string += digit;
    }

    let numStars = finalRowLength - string.length;
    for (let count = 1; count <= numStars; count++) {
      string += '*';
    }

    console.log(string);

    lineNumber++;
  }
}

generatePattern(50);
