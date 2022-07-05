// Takes 2 arrays and returns a new array with their combined elements sorted
// in ascending order.

'use strict';

function merge(arr1, arr2) {
  const mergeSorted = [];

  arr1 = [...arr1];
  arr2 = [...arr2];

  const noArrayIsEmpty = ((...arrs) => {
    return arrs.every(arr => arr.length > 0);
  });

  while (noArrayIsEmpty(arr1, arr2)) {
    mergeSorted.push(
      arr1[0] <= arr2[0] ? arr1.shift() : arr2.shift()
    );
  }

  return mergeSorted.concat(arr1, arr2);
}


console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log( merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log( merge([], [1, 4, 5]));             // [1, 4, 5]
console.log( merge([1, 4, 5], []));             // [1, 4, 5]
