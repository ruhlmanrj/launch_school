// Takes an odd integer and outputs a diamond in an n x n grid, where n is the
// integer.

function diamond(width) {
  let starCount = 1;

  do {
    displayRow(starCount, width);
    starCount += 2;
  } while (starCount < width);

  if (width === 1) return;

  do {
    displayRow(starCount, width);
    starCount -= 2;
  } while (starCount >= 1);
}

function displayRow(starCount, width) {
  const leftSpaceCount = (width - starCount) / 2;
  const middleSpaceCount = starCount - 2;

  if (starCount === 1) {
    console.log(' '.repeat(leftSpaceCount) + '*');
  } else {
    console.log(
      `${' '.repeat(leftSpaceCount)}*${' '.repeat(middleSpaceCount)}*`
    );
  }
}

diamond(1);
console.log('');
diamond(3);
console.log('');
diamond(9);
