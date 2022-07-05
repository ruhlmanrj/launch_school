// Takes a 3x3 nested array representing a matrix and returns its transpose as
// a new array.

'use strict';

// Input: Nested Array
// Output: Nested Array

// Data Structure: Array

// [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6],
// ];

// [
//     [1, 4, 3],
//     [5, 7, 9],
//     [8, 2, 6],
// ]

// [
//  [(0, 0 => 0, 0), (0, 1 => 1, 0), (0, 2 => 2, 0)],
//  [(1, 0 => 0, 1), (1, 1 => 1, 1), (1, 2 => 2, 1)],
// ]

// Algorithm:
// Map through sub-arrays of matrix with index (as row)
//   - Map through elements of sub-array with index (as col)
//       - Return matrix[col][row]
//

function transpose(matrix) {
  return matrix.map((row, rowIndex) => {
    return row.map((_, colIndex) => {
      return matrix[colIndex][rowIndex];
    });
  });
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
