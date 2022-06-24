// Takes two arrays containing numbers and returns a new array containing the
// products of all permutations of number pairs between the arrays.

function multiplyAllPairs(array1, array2) {
  return array1.map(outerNum => {
    return array2.map(innerNum => innerNum * outerNum);
  })
  .flat()
  .sort((num1, num2) => num1 - num2);
}

const products = multiplyAllPairs([2, 4], [4, 3, 1, 2]);
console.log(products);
