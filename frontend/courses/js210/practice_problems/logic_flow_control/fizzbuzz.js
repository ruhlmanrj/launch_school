// Iterates over integers from 1 to 100, inclusively. For multiples of 3 and 5,
// 'FizzBuzz' is output; for multiples of 3 but not 5, 'Fizz' is output; for multiples
// of 5 but not 3, 'Buzz' is output. All numbers that are neither multiples of 3 or 5
// are output as their own value.

function fizzbuzz() {
  for (let number = 0; number <= 100; number += 1) {
    let words = '';
    if (number % 3 === 0) words += 'Fizz';
    if (number % 5 === 0) words += 'Buzz';

    console.log(words || number);
  }
}

fizzbuzz();
