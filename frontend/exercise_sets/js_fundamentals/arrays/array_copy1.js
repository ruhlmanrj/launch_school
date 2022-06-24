// What does the following code log at lines 8 and 12?

let myArray = [1, 2, 3, 4];
const myOtherArray = myArray;

myArray.pop();
console.log(myArray);
console.log(myOtherArray);

myArray = [1, 2];
console.log(myArray);
console.log(myOtherArray);


// At line 8, '[1, 2, 3]' is output since the array mutated on
// line 6 within `pop()` is pointed to by each of the variables declared
// on lines 3 and 4, respectively.

// At line 12, '[1, 2, 3]' is output again since `myOtherArray` still points
// to the same array as it did previously.
