// Takes a number and returns that next highest number that is:
// 1) Odd
// 2) A multiple of 7
// 3) Contains all unique digits

function featured(number) {
  const NEXT_ODD_MULTIPLE_INCREMENT = 14;
  const HIGHEST_POSSIBLE = 9876543201;

  if (number >= HIGHEST_POSSIBLE) {
    console.log('There is no next featured number for this number.');
    return;
  }

  do {
    number += 1
  } while (!isOddMultipleOf7(number));

  while (digitsRepeat(number)) {
    number += NEXT_ODD_MULTIPLE_INCREMENT
  }

  return number;
}

function isOddMultipleOf7(number) {
  return (number % 2 === 1) && (number % 7 === 0);
}

function digitsRepeat(number) {
  digits = number.toString().split('');

  return digits.some(digit => {
    return digits.indexOf(digit) !== digits.lastIndexOf(digit)
  });
}

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."
