// Takes an array of numbers and returns the sum of the sums of each leading
// subsequence.

function sumOfSums(numbers) {
  return numbers.map((_, index) => numbers.slice(0, index + 1)
                                          .reduce(getSum))
                                          .reduce(getSum);
}

function getSum(runningTotal, number) {
  return runningTotal + number;
}

console.log(sumOfSums([3, 5, 2]));
// (3) + (3 + 5) + (3 + 5 + 2) --> 21

console.log(sumOfSums([1, 5, 7, 3]));
// (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36

console.log(sumOfSums([4]));
// 4

console.log(sumOfSums([1, 2, 3, 4, 5]));
// 35
