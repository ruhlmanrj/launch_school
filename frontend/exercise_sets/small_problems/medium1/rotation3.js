// Takes an integer and returns its maximum rotation.

// Iterate from the length of digits down to and eqal to 2 (second to last index)
// Reassign digits to rotate rightmost with num for iteration
// return max rotation

function maxRotation(digits) {
  let rotated = digits;
  const length = digits.toString().length;

  for (let i = length; i >= 2; i -= 1) {
    rotated = rotateRightmostDigits(rotated, i);
  }

  return rotated;
}

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

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845
