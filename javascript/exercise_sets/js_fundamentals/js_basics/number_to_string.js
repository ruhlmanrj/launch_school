// Takes an integer and returns its string representation.

// Create object for mapping digits to string digits

// Assign variable `returnString` an empty string
// Assign variable `remainingDigits` the number

// Use a while loop with condition `remainingDigits` / 10 >= 1
// Within loop:
//   

INTEGER_CHARS = {
  0: '0', 1: '1', 2: '2', 3: '3',
  4: '4', 5: '5', 6: '6', 7: '7',
  8: '8', 9: '9',
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

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
