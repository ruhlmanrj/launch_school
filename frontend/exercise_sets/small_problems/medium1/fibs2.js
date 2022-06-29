// Takes a number representing the position of a value in the fibonacci
// sequence and non-recursively computes and returns the value.

function fibonacci(nth) {
  if (nth <= 2n) {
    return 1n;
  }

  let fib;
  let previous = 1n;
  let twoPrevious = 1n;

  for (let position = 3n; position <= nth; position += 1n) {
    fib = previous + twoPrevious;
    twoPrevious = previous;
    previous = fib;
  }

  return fib;
}

fibonacci(20n);       // 6765
fibonacci(50n);       // 12586269025
fibonacci(75n);       // 2111485077978050
