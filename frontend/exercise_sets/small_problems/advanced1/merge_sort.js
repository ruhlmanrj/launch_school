// Takes an array and returns a new array with its values sorted in ascending
// order using a recursive merge sorting algorithm.

'use strict';

function mergeSort(array) {
  const length = array.length; // 4
  const midIndex = Math.ceil(length / 2); // 2

  const firstHalfArr = array.slice(0, midIndex); // [9, 5]
  const secondHalfArr = array.slice(midIndex); // [7, 1]

  if (firstHalfArr.length < 2) {
    return merge(firstHalfArr, secondHalfArr);
  } else {
    const firstHalfArrSorted = mergeSort(firstHalfArr);
    const secondHalfArrSorted = mergeSort(secondHalfArr);
    return merge(firstHalfArrSorted, secondHalfArrSorted);
  }
}

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

console.log( mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log( mergeSort([5, 3]));                 // [3, 5]
console.log( mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log( mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort(
  [7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]
));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]





[6, 2, 7, 1, 4]

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  let subArray1 = array.slice(0, array.length / 2);
  let subArray2 = array.slice(array.length / 2);

  subArray1 = mergeSort(subArray1);
  subArray2 = mergeSort(subArray2);

  return merge(subArray1, subArray2);
}

[6, 2]      /  [7, 1, 4]  // Level 1
([6], [2])  /  ([7], [1, 4]) 
([6]), ([2]) / ([7]) ([1], [4]) // level 3
