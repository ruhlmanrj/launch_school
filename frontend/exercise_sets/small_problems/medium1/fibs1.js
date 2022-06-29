// Takes a number and returns that fibonacci number

function fibonacci(position) {
  if (position <= 2) {
    return 1;
  }

  return fibonacci(position - 1) + fibonacci(position - 2);
}

fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
fibonacci(4);       // 3
fibonacci(5);       // 5
fibonacci(12);      // 144
fibonacci(100);      // 6765