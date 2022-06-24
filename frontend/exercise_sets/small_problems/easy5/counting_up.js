// Takes an integer and returns an array containing all integers in the range from
// 1 up to an including the original integer.

function sequence(number) {
  const resultArray = [];

  for (let count = 1; count <= number; count++) {
    returnArray.push(count);
  }

  return resultArray;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]
