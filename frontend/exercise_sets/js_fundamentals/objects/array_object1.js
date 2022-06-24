// What will the following code log to the console and why?

const myArray = ['a', 'b', 'c'];

console.log(myArray[0]);    // 'a' since element at index 0 is `'a'`
console.log(myArray[-1]);   // 'undefined' since array elements are not able
                            // to be referenced using negative indexes in JavaScript

myArray[-1] = 'd';          // Insert property
myArray['e'] = 5;           // Insert another property
myArray[3] = 'f';           // Insert an element

console.log(myArray[-1]);   // 'd' due to line 9
console.log(myArray['e']);  // '5' due to line 10
console.log(myArray);       // [ 'a', 'b', 'c', 'f', -1: 'd', e: 5 ]
