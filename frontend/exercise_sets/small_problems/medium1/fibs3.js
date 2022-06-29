// Implements a fibonacci calculator that uses memoization.

'use strict';

(function () {
  const fibValues = {};

  function fibonacci(position, isFirstCall=true) {
    if (position <= 2) {
      return 1;
    }
  
    if (fibValues[position]) {
      return fibValues[position];
    }
  
    fibValues[position] = fibonacci(position - 1) + fibonacci(position - 2);
    return fibValues[position];
  }

  fibonacci(20);       // 6765
  fibonacci(50);       // 12586269025
  fibonacci(75);       // 2111485077978050
})();
