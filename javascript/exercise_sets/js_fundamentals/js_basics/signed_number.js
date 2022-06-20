// // Takes a string and returns the numeric representation of that string.

// If char at string[0] is not '-', result is positive

function stringToSignedInteger(string) {
  const sign = string[0];
  const multiplier = (sign === '-' ? -1 : 1);

  if (['+', '-'].includes(sign)) string = string.slice(1);
  const absValue = stringToInteger(string);

  return multiplier * absValue;
}

function stringToInteger(string) {
  let number = 0;
  let power  = (string.length - 1);

  for (let i = 0; i < string.length; i++) {
    number += (string[i] * 10**power);
    power--;
  }

  return number;
}

console.log(stringToSignedInteger('4321'));
console.log(stringToSignedInteger('-570'));
console.log(stringToSignedInteger('+100'));
