// Logs integers, where for each integer 'n', 1 >= 'n' <= 100
// If 'n' is a multiple of 3 and 5, log its value appended by a '!'
// e.g '15!' If `n` is an exclusive multiple of 3 or 5, log
// its value.

function multiplesOfThreeAndFive() {
  for (let number = 1; number <= 100; number += 1) {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log(`${number}!`);
    } else if (number % 3 === 0 || number % 5 === 0) {
      console.log(number);
    }
  }
}

multiplesOfThreeAndFive();


// Further Exploration
// Modify the implementation to take arguments denoting the range
// to be iterated through.

function multiplesOfThreeAndFive(firstNumber, lastNumber) {
  for (let number = firstNumber; number <= lastNumber; number += 1) {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log(number + '!');
    } else if (number % 3 === 0 || number % 5 === 0) {
      console.log(number);
    }
  }
}

multiplesOfThreeAndFive(1, 100);
