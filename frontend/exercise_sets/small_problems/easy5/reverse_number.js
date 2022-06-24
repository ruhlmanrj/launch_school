// Takes an integer and returns an integer with the same digits in reverse order.

// Number => string => array => reversed => join => Number

function reverseNumber(number) {
  const digitStrings         = String(number).split('');
  const reversedNumberString = digitStrings.reverse().join('');

  return Number(reversedNumberString);
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that zeros get dropped!
console.log(reverseNumber(1));        // 1
