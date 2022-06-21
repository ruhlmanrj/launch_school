// Takes a positive integer and returns an array of digits in the number.

function digitList(number) {
  const digits = [];

  do {
    const onesPlace = number % 10;
    digits.unshift(onesPlace);
    
    number = Math.floor(number / 10);
  } while (number > 0)

  return digits;
}

console.log(digitList(12345));
console.log(digitList(7));
console.log(digitList(375290));
console.log(digitList(444));


// Further Exploration
//
// Use the `Array.prototype.map` method to solve this problem.

function digitList(number) {
  const numberStrings = String(number).split('');
  return numberStrings.map(numString => Number(numString));
}
