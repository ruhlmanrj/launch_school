// Given an array, create a shallow copy using 2 different implementations.

// Implemenation 1
function arrShallowCopy1(array) {
  const shallowCopyArr = [];

  for (let i = 0; i < array.length; i++) {
    shallowCopyArr.push(array[i]);
  }

  return shallowCopyArr;
}

const originalArray  = [ {}, [], {} ];
const shallowCopyArr = arrShallowCopy1(originalArray);

// Implementation 2
const shallowCopyArr = originalArray.slice();

console.log(originalArray[0] === shallowCopyArr[0]);
console.log(originalArray[1] === shallowCopyArr[1]);
console.log(originalArray[2] === shallowCopyArr[2]);

originalArray.pop();
console.log(originalArray);
console.log(shallowCopyArr);
