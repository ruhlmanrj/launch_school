// Takes a string and returns the string with the case of each character staggered.

function staggeredCase(string) {
  return string
    .split('')
    .map(parityCase)
    .join('');
}

function parityCase(char, number) {
  if (number % 2 === 0) {
    return char.toUpperCase();
  } else {
    return char.toLowerCase();
  }
}

console.log(
  staggeredCase('I Love Launch School!')        // "I LoVe lAuNcH ScHoOl!"
);
console.log(
staggeredCase('ALL_CAPS')                     // "AlL_CaPs"
);
console.log(
  staggeredCase('ignore 77 the 4444 numbers')   // "IgNoRe 77 ThE 4444 nUmBeRs"
);
