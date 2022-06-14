// Encrypts a string using the ROT13 cipher and outputs the encrypted
// value.

const LOWERCASE_LETTERS = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
  'u', 'v', 'w', 'x', 'y', 'z'
];

const UPPERCASE_LETTERS = LOWERCASE_LETTERS.map(letter => {
  return letter.toUpperCase();
});

const rotAdjustedIndex = index => index <= 12 ? (index + 13) : (index - 13);

let rot13 = string => {
  let chars = string.split('');

  let encrypted_chars = chars.map(char => {
    if (/[^a-z]/i.test(char)) {
      return char;
    } else if (/[a-z]/.test(char)) {
      let index = LOWERCASE_LETTERS.indexOf(char);
      return LOWERCASE_LETTERS[rotAdjustedIndex(index)];
    } else {
      let index = UPPERCASE_LETTERS.indexOf(char);
      return UPPERCASE_LETTERS[rotAdjustedIndex(index)];
    }
  });

  return encrypted_chars.join('');
}

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
