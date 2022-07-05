// Takes an array representing a matrix and returns its transpose.

'use strict';

function transpose(matrix) {
  const newMatrixLength = matrix[0].length;
  const newMatrix = Array.from({length: newMatrixLength}, () => []);

  matrix.forEach((row, _) => {
    row.forEach((element, colIndex) => {
      newMatrix[colIndex].push(element);
    });
  });

  console.log(newMatrix);
}

transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]

transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]

transpose([[1]]);                     // [[1]]

transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
