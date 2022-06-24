// Takes an array as an argument and returns a two element nested
// array of arrays, each with half of the first array's elements.

function halvsies(array) {
  const left  = [];
  const right = [];

  const halfway = Math.ceil(array.length / 2)

  for (let i = 0;  i < array.length; i++) {
    if (i < halfway) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [left, right];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]
