// Takes a number and returns the negative of its absolute value.

function negative(number) {
  return -Math.abs(number);
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0


// Further Exploration
//
// Refactor the solution to use the ternary operator.

function negative(number) {
  return (number < 0 ? number : -number);
}
