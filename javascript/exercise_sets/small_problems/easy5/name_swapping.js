// Takes a string representing a first and last name, and returns a string formatted
// with the last name appearing before the first name.

function swapName(fullName) {
  const firstLast = fullName.split(' ');

  const temp = firstLast[0];
  firstLast[0] = `${firstLast[1]}, `;
  firstLast[1] = temp;

  return firstLast.join(' ');
}

console.log(swapName('Joe Roberts'));


// Further Exploration
//
// Update the implementation to handle any number of first names.

function swapName(name) {
  const reversed = name.split(' ').reverse()
  reversed[0] = reversed[0] + ','

  return reversed.join(' ');
}
