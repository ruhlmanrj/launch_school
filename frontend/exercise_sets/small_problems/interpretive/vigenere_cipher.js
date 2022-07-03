// Takes a string, encrypts it using the Vigenere cipher, and returns the
// encrypted string.

function vignereEncrypt(plaintext, keyword) {
  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const parseLetter = /[a-z]/i;

  let keys = initializeKeys(keyword);
  let cipherText = '';

  for (const char of plaintext) {
    if (keys.length === 0) {
      keys = initializeKeys(keyword);
    }

    if (parseLetter.test(char)) {
      const shiftValue = ALPHABET.indexOf(keys.shift());
      cipherText += caesarEncrypt(char, shiftValue);
    } else {
      cipherText += char;
    }
  }

  return cipherText;
}

function initializeKeys(keyword) {
  return Array.from(keyword.toUpperCase());
}

function caesarEncrypt(plaintext, key) {
  let ciphertext = '';

  plaintext.split('').forEach(char => {
    if (char >= 'A' && char <= 'Z') {
      ciphertext += encrypt(char, key, 'upper');
    } else if (char >= 'a' && char <= 'z') {
      ciphertext += encrypt(char, key, 'lower');
    } else {
      ciphertext += char;
    }
  });

  return ciphertext;
}

function encrypt(letter, key, letterCase) {
  const base = letterCase === 'upper' ? 65 : 97;
  const charCode = letter.charCodeAt(0) - base;
  const shifted = (charCode + key) % 26;

  return String.fromCharCode(shifted + base);
}

console.log(vignereEncrypt("Pineapples don't go on pizzas!", 'meat'));
