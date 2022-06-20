// Takes a number and returns true or false depending on whether it
// it a palindrome.

function isPalindromicNumber(number) {
  const reversed = String(number).split().reverse().join('');
  return String(number) === reversed;
}

console.log(isPalindromicNumber(34543)   === true);
console.log(isPalindromicNumber(123210)) === false;
console.log(isPalindromicNumber(22)      === true);
console.log(isPalindromicNumber(5)       === true);


// Further Exploration
//
// Question:
// If the argument begins with one or more zeroes, will this
// break the code? (only the digits after the leading zeroes are
// relevant in the palindrome determination).
//
// Answer:
//
// The solution will still work because the string returned from the
// number to string functions contains the same digits as the number
// in each position. It appears this wasn't always the case, but it
// is currently.
