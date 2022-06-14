// Takes two strings, 'a' and 'b, and returns a boolean value indicating
// whether 'b' is a leading substring of 'a'.

function startsWith(string, searchString) {
  for (let i = 0; i < searchString.length; i++) {
    if (string[i] !== searchString[i]) return false;
  }

  return true;
}

let str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We')     === true);
console.log(startsWith(str, 'We put') === true);
console.log(startsWith(str, '')       === true);
console.log(startsWith(str, 'put')    === false);

let longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString) === false);
