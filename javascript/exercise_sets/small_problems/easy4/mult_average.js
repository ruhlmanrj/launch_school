// Takes an array of integers, multiplies them, divides the product by
// the number of integers in the array, and returns the multiplicative average.

function showMultiplicativeAverage(numbers) {
  const product = numbers.reduce((total, number) => total * number);
  const multAvg = product / numbers.length;

  return multAvg.toFixed(3);
}

console.log(showMultiplicativeAverage([3, 5])); // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));  // "28361.667"
