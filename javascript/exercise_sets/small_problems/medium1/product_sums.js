// The following code is expected to return the product of the
// sums of two arrays of numbers. Will it product this result?
// Why or why not?

function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  let sum;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  return sum;
}

// No, the code will not work as intended. THe `total` function will
// return `undefined` regardless of its arguments since there is no
// return statement used. To fix the code, `sum` on line 17 needs to
// be explicitly returned from the function.
//
// Also, an initializer needs to be used to set `sum` to `0` on line 11.
