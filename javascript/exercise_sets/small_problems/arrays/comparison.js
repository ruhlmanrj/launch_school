// Takes two arrays and returns true or false depending upon whether they
// have the same values (order agnostic).

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) return false;

  const checkedElements = [];

  for (let i = 0; i < array1.length; i++) {
    if (checkedElements.includes(array1[i])) {
      continue;
    } else if (elementCount(array1, array1[i]) !==
        (elementCount(array2, array1[i]))) {
      return false;
    }

    checkedElements.push(array1[i]);
  }

  return true;
}

function elementCount(array, element) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) count += 1;
  }

  return count;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));                  // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));                  // true
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));      // true
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));                // false
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));            // true
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));            // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));            // false
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]));                  // false
console.log(areArraysEqual([1, 1, 1], [1, 1]));                     // false
console.log(areArraysEqual([1, 1], [1, 1]));                        // true
