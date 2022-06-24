// What will the following code log to the console and why?

const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
const array2 = [];

for (let i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (let i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

// An array appearing the same as that shown on line 3 will be output.
// This is because within the second `for` loop, the indexes of array1 are
// reassigned to new strings while the previously referenced strings remain
// unchanged. Also, array2 is a shallow copy of array1, thus reassignments within
// array1 will not be reflected within array2.
console.log(array2);


// Further Exploration
//
// Question:
// If an object literal was part of array1, would the changes made to that object
// literal in array1 be reflected in array2?
//
// Answer:
// Yes, since array2 would be referencing an object with the same memory location as
// the respective object in array1. Array2 is a shallow copy of array1.
//
// Question:
// How would you change the code so that any changes made to array1 in the second
// for loop get reflected to array2?
//
// Answer:
// Since strings are immutable in javascript, the only way to accomplish this would
// be to reassign the indexes of array2 to reference strings with the same values
// as the new strings in array1. One way to accomplish this would be to reassign
// each index of array2 to the element at the same index of array1 just after it
// is reassigned within each iteration of the loop.
