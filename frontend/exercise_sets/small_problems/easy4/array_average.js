// Takes an array of integers and returns their mean average rounded down to
// the nearest integer.

// Calc sum
// Divide by length to get average
// Math.floor to round down to integer

function average(numbers) {
  const sum  = numbers.reduce((runningSum, number) => runningSum + number);
  const mean = sum / numbers.length;

  return Math.floor(mean);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40
