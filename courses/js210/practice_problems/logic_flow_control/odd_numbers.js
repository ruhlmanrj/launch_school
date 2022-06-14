// Take a positive integer 'n' as an argument and output odd numbers from
// 1 to 'n' (inclusive).

function logOddNumbers(lastNumber) {
  for (let currentNumber = 1; currentNumber <= lastNumber; currentNumber += 2) {
    console.log(counter);
  }
}

logOddNumbers(19);

// Further Exporation

//   Part 1: Implement the loop without using a condition within its body
// Solution: The above solution is implemented as such.

//   Part 2: Implement the loop to use a conditional that checks for even numbers
//           and skips them with the `continue` statement.
// Solution:

function logOddNumbers(lastNumber) {
  for (let currentNumber = 1; currentNumber <= lastNumber; currentNumber += 1) {
    if (currentNumber % 2 === 0) continue;

    console.log(currentNumber);
  }
}

logOddNumbers(19);
