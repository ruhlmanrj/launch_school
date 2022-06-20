// Identify the problem below, explain it, then fix the implmentation
// so it works as intended.

function penultimate(string) {
  // return string.split(' ')[-2];
  const words = string.split(' ');
  return words[words.length - 2];
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"

// The original implementation does not work as intended because in JavaScript
// array elements cannot be accessed using negative indexes. In order to
// obtain the index of the second to last element in an array, its length has
// to be known. Once the length is known it can be added to the negative index
// to return the usable index value.
//
// In order to access the length of the array created from the string,
// it had to be first stored in a variable. This is so its length property
// could be accessed prior to using it as part of the expression within the
// bracket notation where the second to last index is calculated.
