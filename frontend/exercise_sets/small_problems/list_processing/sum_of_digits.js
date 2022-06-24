// Takes an integer and returns the sum of its digits.

function sum(number) {
  const digits = String(number)
    .split('')
    .map(numString => Number(numString));

  return digits.reduce((total, digit) => total + digit);
}

console.log(sum(12345));
