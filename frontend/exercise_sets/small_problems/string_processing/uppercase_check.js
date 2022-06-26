// Takes a string and returns a boolean value indicating whether all of its
// letters are uppercase.

function isUppercase(string) {
  const letters = string.replace(/[^a-z]/ig, '')
                        .split('');

  return letters.every(letter => (letter >= 'A' && letter <= 'Z'));
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true
