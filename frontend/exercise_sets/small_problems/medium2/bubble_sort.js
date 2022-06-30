// Takes an array and returns it sorted in ascending order.

// Set flag to track whether there was a swap
// Loop while flag is true
//   - Set flag to false
//   - Iterate through input until last index - 1
//     - If the element at current index is > next index,
//       use deconstructing assignment to swap them
//     -  - Set flag to true if swap

function bubbleSort(array) {
  let swap = true
  do {
    swap = false;

    const lastSwappableIndex = array.length - 2;
    for (let i = 0; i <= lastSwappableIndex; i += 1) {
      const currentElement = array[i];
      const nextElement = array[i + 1]

      if (currentElement > nextElement) {
        [array[i], array[i + 1]] = [nextElement, currentElement];
        swap = true;
      }
    }
  } while (swap);
}

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
