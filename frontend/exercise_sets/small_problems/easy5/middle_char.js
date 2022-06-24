// Takes a string and returns its middle character.

// IF string length is even
//   Divide the length by 2 and subtract 1 to get index prior to middle
//   return the substring starting at that index for 2 chars
// IF string length is odd
//   Divide length by 2 and round down.
//   return char at that index

function centerOf(string) {
  let middle = string.length / 2;

  if (Number.isInteger(middle)) {
    return string.slice(middle - 1, middle + 1);
  } else {
    middle = Math.floor(middle);
    return string.slice(middle, middle + 1);
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"
