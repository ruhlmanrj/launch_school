// Takes a string or array and reverses the order of elements within,
// returning a new string or array.

function reverse(valueToReverse) {
  // Creates an empty string or array depending on the value passed
  // as an argument.
  let reversedValue = valueToReverse.slice(valueToReverse.length);

  const lastIndex = valueToReverse.length - 1;
  for (let i = lastIndex; i >= 0; i--) {
    reversedValue = reversedValue.concat(valueToReverse[i]);
  }

  return reversedValue;
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]
