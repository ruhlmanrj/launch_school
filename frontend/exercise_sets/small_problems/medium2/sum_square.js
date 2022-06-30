// Takes a positive integer representing a range of integers from 1 up to
// and including that integer. Three calculations are made:
// 1) The sum of all integers in the range is calculated and that sum
//    is squared
// 2) The squares of all integers are calculated and those squares
//    are summed.
// 3) The result of calculation 2 is subtracted from the result of
//    calculation 1, which is returned.

function sumSquareDifference(rangeEnd) {
  const ints =  intsInRange(rangeEnd);

  const [sum, sumOfSquares] = ints.reduce((sums, int) => {
    return [sums[0] + int, sums[1] + int ** 2];
  }, [0, 0])

  return sum ** 2 - sumOfSquares;
}

function intsInRange(endInt) {
  return [...Array(endInt + 1).keys()].slice(1);
}

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150
