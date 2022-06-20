// What will the following code output and why?

const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';                  // Property added to array (non-element)
console.log(array.length);               // 3
console.log(Object.keys(array).length);  // 4 (all properties)

array[-2] = 'Watermelon';                // Property added to array (non-element)
console.log(array.length);               // Still 3
console.log(Object.keys(array).length);  // 5 (all properties)
