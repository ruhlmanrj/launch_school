// Takes a number and outputs a right triangle whose right and bottom
// sides are equal in length to the number;

function triangle(sideLength) {
  let row = repeatChar(sideLength, ' ');

  for (let i = 0; i < sideLength; i++) {
    row = row.substring(1, row.length) + '*'

    console.log(row);
  }
}

function repeatChar(charsLength, char) {
  let charString = '';
  while (charString.length < charsLength) {
    charString += char;
  }

  return charString;
}

triangle(9);
