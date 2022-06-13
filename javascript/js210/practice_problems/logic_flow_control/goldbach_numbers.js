// Logs every pair of primes that sum to a number

function checkGoldbach(sum) {
  if (sum < 4 || sum % 2 === 1) return console.log(null);

  let upNum   = 2;
  let downNum = sum - 2;

  while (upNum <= sum / 2) {
    if (isPrime(upNum) && isPrime(downNum)) console.log(upNum, downNum);

    upNum++
    downNum--
  }
}

function isPrime(number) {
  // if number is even, return true if 2 and false otherwise
  if (number <= 1)      return false;
  if (number % 2 === 0) return number === 2

  // Eliminates iterations for numbers that couldn't possibly be factors
  let candidate = Math.floor(number / 2);

  for (; candidate >= 3; candidate -= 1) {
    if (number % candidate === 0) return false;
  }

  return true;
}

checkGoldbach(3);
// // logs: null

checkGoldbach(4);
// // logs: 2 2

checkGoldbach(12);
// // logs: 5 7

checkGoldbach(100);
// // logs:
// // 3 97
// // 11 89
// // 17 83
// // 29 71
// // 41 59
// // 47 53
