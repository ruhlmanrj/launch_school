// Takes a signed number and returns its string representation.

INTEGER_CHARS = {
  0: '0', 1: '1', 2: '2', 3: '3',
  4: '4', 5: '5', 6: '6', 7: '7',
  8: '8', 9: '9',
}

function signedIntegerToString(integer) {
  let sign = '';
  if (integer > 0) {
    sign = '+';
  } else if (integer < 0) {
    sign = '-';
  }

  const signlessString = integerToString(Math.abs(integer));

  return sign + signlessString;
}

function integerToString(integer) {
  let returnString = '';
  let remainingDigits = integer;

  do {
    let remainder = remainingDigits % 10
    let nextDigit = INTEGER_CHARS[remainder];

    remainingDigits = (remainingDigits - remainder) / 10;

    returnString = nextDigit + returnString;
  } while (remainingDigits >= 1);

  return returnString;
}

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"
