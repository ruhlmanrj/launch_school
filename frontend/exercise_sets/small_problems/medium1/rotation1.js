// Takes an array and rotates its first element to become the last.

'use strict';

// Input: Any data type
// Output: New array

// Algorithm:
// Validate
//  - If the input is not an array
//    - Return undefined
//  - If the input is an empty array
//    - Return an empty array
// Duplicate the input array
// Use `shift` to `push` the first element onto the end
// Return the new array
function rotateArray(original) {
  if (!Array.isArray(original)) {
    return;
  }

  if (original.length === 0) {
    return [];
  }

  const shallowCopy = Array.from(original);
  shallowCopy.push(shallowCopy.shift());

  return shallowCopy;
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]