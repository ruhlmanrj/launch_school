// The `getSelectedColumns` function is supposed to extract specific columns
// into a new array. As implemented, it isn't working as expected. What is the
// problem?

function getSelectedColumns(numbers, cols) {
  var result = [];

  for (var i = 0, length = numbers.length; i < length; i += 1) {
    for (var j = 0, length = cols.length; j < length; j += 1) {
      if (!result[j]) {
        result[j] = [];
      }

      result[j][i] = numbers[i][cols[j]];
    }
  }

  return result;
}

// given the following arrays of number arrays
const array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

// `array1` in row/column format
// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]]

console.log(getSelectedColumns(array1, [0]));
// [[1]];            expected: [[1, 4, 7]]

console.log(getSelectedColumns(array1, [0, 2]));
// [[1, 4], [3, 6]]; expected: [[1, 4, 7], [3, 6, 9]]

console.log(getSelectedColumns(array2, [1, 2]));
// [[2, 2], [3, 3]]; expected: [[2, 2, 2], [3, 3, 3]]

// The `var` declaration of `length` on line 8 results in a function scoped
// variable being created. Therefore on line 9, `length` is reassigned to
// the integer number of elements in `cols`. Due to this, the maximum number
// iterations carried out in the outer loop will be equal to the length of
// `cols`.
//
// To fix this, either give the two variables different names, or make them
// block scoped.
