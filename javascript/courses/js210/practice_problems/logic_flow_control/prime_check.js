// Takes a number and returns a boolean value indicating whether it is prime.

function isPrime(number) {
  // if number is even, return true if 2 and false otherwise
  if (number <= 1)      return false;
  if (number % 2 === 0) return number === 2

  // Eliminates iterations for numbers that couldn't possibly be factors
  let candidate = Math.floor(number / 2);

  for (; candidate >= 3; candidate -= 1) {
    if (number % candidate === 0) return false;
  }

  return true;
}

console.log(isPrime(1));    // false
console.log(isPrime(2));    // true
console.log(isPrime(3));    // true
console.log(isPrime(43));   // true
console.log(isPrime(55));   // false
console.log(isPrime(0));    // false
