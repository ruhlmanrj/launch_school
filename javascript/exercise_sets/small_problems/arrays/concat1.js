// A custom implementation of the 'Array.prototype.concat' function.

function concat(array, value) {
  const concatArray = array.slice();

  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      concatArray.push(value[i]);
    }
  } else {
    concatArray.push(value);
  }

  return concatArray;
}

console.log(concat([1, 2, 3], [4, 5, 6]));      // [1, 2, 3, 4, 5, 6]
console.log(concat([1, 2], 3));                 // [1, 2, 3]
console.log(concat([2, 3], ['two', 'three']));  // [2, 3, 'two', 'three']
console.log(concat([2, 3], 'four'));            // [2, 3, 'four']

const obj = { a: 2, b: 3};
const newArray = concat([2, 3], obj);
console.log(newArray);                 // [2, 3, { a: 2, b: 3 }]
obj.a = 'two';
console.log(newArray);                 // [2, 3, { a: 'two', b: 3 }]

const arr1 = [1, 2, 3];
const arr2 = [4, 5, obj];
const arr3 = concat(arr1, arr2);
console.log(arr3)                 // [1, 2, 3, 4, 5, { a: 'two', b: 3 }]
obj.b = 'three';
console.log(arr3);                // [1, 2, 3, 4, 5, { a: 'two', b: 'three' }]

console.log(arr1)                 // [1, 2, 3]
console.log(arr2)                 // [4, 5, { a: 'two', b: 'three' }]
