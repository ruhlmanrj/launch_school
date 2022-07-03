// Takes a string, encrypts it using the caesar cipher, and returns the
// encrypted string.

const ALPHABET_LENGTH = 26;
const ALPHABET = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function caesarEncrypt(text, offset) {
  const parseUpper = /[A-Z]/;
  const parseLower = /[a-z]/;
  let cipherText = '';

  for (const char of text) {
    if (parseUpper.test(char)) {
      offset = normalizeOffset(offset);
      cipherText += encodeChar(char, offset).toUpperCase();
    } else if (parseLower.test(char)) {
      offset = normalizeOffset(offset);
      cipherText += encodeChar(char, offset).toLowerCase();
    } else {
      cipherText += char;
    }
  }

  return cipherText;
}


// If offset + index of char is > 25, go backwards to find index
// Otherwise just return char at index of offset + current char index
function encodeChar(char, offset) {
  char = char.toUpperCase();

  const index = ALPHABET.indexOf(char);
  let newIndex = index + offset;

  let encodedChar;
  if (newIndex <= ALPHABET_LENGTH) {
    encodedChar = ALPHABET.charAt(newIndex);
  } else {
    newIndex = adjustIndexForOverflow(newIndex);
    encodedChar = ALPHABET.charAt(newIndex);
  }
  return encodedChar;
}

function adjustIndexForOverflow(index) {
  const overflow = index - ALPHABET_LENGTH;
  const backwardsOffset = ALPHABET_LENGTH - overflow;
  return ALPHABET_LENGTH - backwardsOffset;
}

function normalizeOffset(offset) {
  return offset % ALPHABET_LENGTH;
}

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(
  caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2)
);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
