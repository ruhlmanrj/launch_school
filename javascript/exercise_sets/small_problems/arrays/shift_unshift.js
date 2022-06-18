// Custom implementations of the 'Array.prototype.shift' and '
// Array.prototype.unshift' methods.

function shift(array) {
  const firstElement = array[0]
  array.splice(0, 1);

  // return firstElement;
}

function unshift(array, ...args) {
  const origValues = array.splice(0);
  const finalValues = args.concat(origValues);
  array.push(...finalValues);

  // return array.length;
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]))               // 3
console.log(unshift([4, 5], [1, 2, 3]))       // 3

const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]


// Further Exploration
//
// Implement both of the methods above without using `splice()`

function shift(array) {
  if (array.length === 0) return undefined;

  const firstElement = array[0];
  const finalElements = array.slice(1);

  array.length = 0;

  array.push(...finalElements);

  return firstElement;
}

function unshift(array, ...args) {
  const origValues = array.slice(0);
  const finalValues = args.concat(origValues);

  array.length = 0;
  array.push(...finalValues);

  return array.length;
}
