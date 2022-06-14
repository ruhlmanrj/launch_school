// Computes the Greatest Common Divisor of two positive integers.

function gcd(num1, num2) {

  // Obtain smaller of two numbers (or first number if they are equal)
  // so we can begin checking for factors starting with that number
  let currentNum = (num1 <= num2 ? num1 : num2);
  while (true) {
    if (num1 % currentNum === 0 && num2 % currentNum === 0) {
      return currentNum;
    }

    currentNum -= 1
  }
}

console.log(gcd(12, 4)  === 4);
console.log(gcd(15, 10) === 5);
console.log(gcd(9, 2)   === 1);


// Further Exploration
// Expand the functionality of the program to calculate the GCD for an
// arbitrary collection of 2 or more integers.

function gcd(numbers) {
  if (numbers.length === 1) return numbers[0];

  let temp;
  let [num1, num2] = [numbers[0], numbers[1]];

  while (num2 !== 0) {
    temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }

  numbers.splice(0, 2, num1);
  return gcd(numbers);
}

console.log(gcd([150, 25, 250, 1000, 10000])  === 25);
console.log(gcd([15, 10, 5]) === 5);
console.log(gcd([9, 2, 18, 100])   === 1);
