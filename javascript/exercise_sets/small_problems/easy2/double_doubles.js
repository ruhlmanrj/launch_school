// Takes a number,and returns the result for either of two calculations.
// Returns the number unmodified if the left-half digits are identical to
// the right half; otherwise returns the number multiplied by 2.

// create a first half substring and second half substring
// if they're identical output number otherwise multiply by 2

// (0, length / 2) + (length / 2, length)



function twice(number) {
  if (doubleNumber(number)) {
    return number;
  } else {
    return number * 2;
  }
}

function doubleNumber(number) {
  const string = String(number);
  const leftHalf  = string.substring(0, string.length / 2)
  const rightHalf = string.substring(string.length / 2);

  return leftHalf === rightHalf;
}

console.log(twice(37)     === 74);
console.log(twice(44)     === 44);
console.log(twice(334433) === 668866);
console.log(twice(444)    === 888);
console.log(twice(107)    === 214);
console.log(twice(103103) === 103103);
console.log(twice(3333)   === 3333);
console.log(twice(7676)   === 7676);
