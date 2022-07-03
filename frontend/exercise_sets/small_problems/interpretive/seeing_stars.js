// Takes an integer and outputs an 8-pointed star in a grid with both vertical
// and horizontal axes containing positions equal to the integer.

function star(nRows) {
  const bottomRows = createBottomRows(nRows);

  displayRows([...bottomRows].reverse());
  displayMiddleRow(nRows);
  displayRows(bottomRows);
}

function createBottomRows(nRows) {
  const OUTER_ROW_STAR_COUNT = 3;

  const rows = [];
  const midIndex = (nRows - 1) / 2;

  let padSpaces = (nRows - OUTER_ROW_STAR_COUNT) / 2;
  let midSpaces = 0;

  for (let row = 0; row < midIndex; row += 1) {
    rows.push(createRow(padSpaces, midSpaces));

    padSpaces -= 1;
    midSpaces += 1;
  }

  return rows;
}

function createRow(padSpaces, midSpaces) {
  const spaces = ' '.repeat(midSpaces);
  return ' '.repeat(padSpaces) + `*${spaces}*${spaces}*`;
}

function displayRows(rows) {
  rows.forEach(row => console.log(row));
}

function displayMiddleRow(width) {
  console.log('*'.repeat(width));
}

star(9);
