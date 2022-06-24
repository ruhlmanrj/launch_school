// Takes an array of numbers and returns an array with the same number of
// elements, but each element's value is the running total from the
// first array.

function runningTotal(numbers) {
  let runningTotal = 0;
  return numbers.map(number => runningTotal += number);
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []


// Further Exploration
//
// Question:
// Can you rewrite the solution to use the `Array.prototype.map` method?
// What types of problems are well suited for the aforementioed method?
//
// Answer:
// My intital implementation used the `Array.prototype.map` method.
//
// This method is well suited for situations where each element of an
// array needs to be transformed in a manner common to all of them.
//
// One example would be where we need to capitalize only certain characters
// of a string. This could be accomplished by converting the string to an array,
// mapping the characters to a character with the appropriate case, then converting
// the array back into a string.
