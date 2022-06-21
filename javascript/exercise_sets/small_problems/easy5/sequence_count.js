// Takes a count and number and returns an array of multiples of that number of length
// equal to count.

function sequence(count, startNum) {
  let total = 0;
  const multiples = [];

  for (let counter = 1; counter <= count; counter++) {
    total += startNum;
    multiples.push(total);
  }

  return multiples;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []
