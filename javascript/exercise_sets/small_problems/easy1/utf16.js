// Takes a string and calculates the UTF-16 value for each character,
// then returns the sum of those values.

// If the next 2 chars are \u

function utf16Value(string) {
  let sum = 0;

  for (let i = 0; i < string.length; i++) {
    sum += string.charCodeAt(i);
  }

  return sum;
}

console.log(utf16Value('Four score')    === 984);
console.log(utf16Value('Launch School') === 1251);
console.log(utf16Value('a')             === 97);
console.log(utf16Value('')              === 0);
console.log(utf16Value('\u03A9') === 937);
