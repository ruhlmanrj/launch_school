// Takes a number and returns a new number with the last 'n' digits rotated.

// Input:
// - Arg 1: Number to be rotated
// - Arg 2: Number of digits to rotate

function rotateRightmostDigits(number, n) {
  const numberString = String(number);
  const firstPart = numberString.slice(0, numberString.length - n);
  const secondPart = numberString.slice(numberString.length - n);
  const resultString = firstPart + rotateString(secondPart);

  return Number(resultString);
}

function rotateString(string) {
  return string.slice(1) + string[0];
}


console.log(rotateRightmostDigits(735291, 1));      // 735291

console.log(rotateRightmostDigits(735291, 2));      // 735219

console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
