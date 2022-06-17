// Calculates and returns the index of the first Fibonacci number that has the
// number of digits specified.

// Function uses BigInts
// Function takes an argument for number of digits
// Fib number indexes are 1 based
// Argument will always be >= 2

// Iterate through the fib numbers
// When a number is encountered with digits equal to
// the specified value, return the index
// Can determine the number of digits by calling String(digits).length

// fib(n) = fib(n-1) + fib(n+2)

// function findFibonacciIndexByLength(nDigits) {
//   let previousPreviousFib = 1n;
//   let previousFib         = 1n;
//   let currentFib;
//   let index = 3n;

//   while (true) {
//     currentFib = previousPreviousFib + previousFib
//     if (String(currentFib).length === Number(nDigits)) {
//       return index;
//     }

//     previousPreviousFib = previousFib;
//     previousFib         = currentFib;

//     index++;
//   }
// }

function findFibonacciIndexByLength(nDigits) {
  let previousPreviousFib = 1n;
  let previousFib         = 1n;
  let currentFib;
  let index = 2n;

  do {
    currentFib = previousPreviousFib + previousFib
    index++;

    previousPreviousFib = previousFib;
    previousFib         = currentFib;
  } while (String(currentFib).length < nDigits);

  return index;
}

let isTrue = findFibonacciIndexByLength(2n) === 7n;
console.log(isTrue);

isTrue = findFibonacciIndexByLength(3n)     === 12n;
console.log(isTrue);

isTrue = findFibonacciIndexByLength(10n)    === 45n;
console.log(isTrue);

isTrue = findFibonacciIndexByLength(16n)    === 74n;
console.log(isTrue);

isTrue = findFibonacciIndexByLength(100n)   === 476n;
console.log(isTrue);

isTrue = findFibonacciIndexByLength(1000n)  === 4782n;
console.log(isTrue);

isTrue = findFibonacciIndexByLength(10000n) === 47847n;
console.log(isTrue);
