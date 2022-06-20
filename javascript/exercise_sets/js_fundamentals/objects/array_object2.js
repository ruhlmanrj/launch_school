// The function in the following code snippet is expected to return
// the integer 5. Is this the case and why?

const myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  let sum = 0;

  for (let i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / array.length;
}

console.log(average(myArray));

// No, the function does not return the expected value because the
// assigments on lines 5 and 6 are for properties, not elements.
// Accessing the length property of an array returns an integer
// one greater than the largest non-negative integer key (index)
// within the array. In this case, the array has a length of 2 and
// thus the sum of 20 divided by 2 returns 10 instead of 5.


// Further Exploration
//
// Refactor the above code to work as intended.


const myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  let sum = 0;

  for (let i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / Object.keys(myArray).length;  // Number of keys in the array
}

console.log(average(myArray));
