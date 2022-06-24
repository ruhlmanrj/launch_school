// Computes the sum of all numbers between 1 and a specified ending
// number that are multiples of 3 or 5.

function multisum(endNum) {
  let sum = 0;

  // Initializing `currentNum` to 3 since it is the smallest multiple of 3 or 5
  for (currentNum = 3; currentNum <= endNum; currentNum++) {
    if (currentNum % 3 === 0 || currentNum % 5 === 0) {
      sum += currentNum;
    }
  }

  return sum;
}

console.log(multisum(3)    === 3);
console.log(multisum(5)    === 8);
console.log(multisum(10)   === 33);
console.log(multisum(1000) === 234168);
