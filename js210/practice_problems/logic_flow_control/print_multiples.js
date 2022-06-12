// Takes a number and outputs its multiples that fall within
// the range of 0 to 100 (inclusive) that are also odd numbers;
// Numbers are output in descending order.

function logOddMultiples(testNumber) {
  for (let candidateNumber = 100; candidateNumber >= testNumber;) {
    if (candidateNumber % testNumber === 0 && candidateNumber % 2 === 1) {
      console.log(candidateNumber);
    }

    // Decrements `candidateNumber` by 1 until a multiple is found,
    // then begins decrementing by the value of `testNumber` to
    // minimize iterations
    if (candidateNumber % testNumber === 0) {
      candidateNumber -= testNumber;
    } else {
      candidateNumber -= 1;
    }
  }
}

logOddMultiples(17);
logOddMultiples(21);


// Further Exploration
// Determine the largest multiple of the test number that is less than or equal
// to 100, then decrement the candidate number by the value of the test number
// while the candidate number is greater than or equal to the test number.

function logOddMultiples(testNumber) {
  let multiple = Math.floor(100 / testNumber) * testNumber;

  for (; multiple > 0; multiple -= testNumber) {
    if (multiple % 2 === 1) console.log(multiple);
  }
}

logOddMultiples(17);
logOddMultiples(21);
