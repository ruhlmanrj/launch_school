// Takes an array of strings and returns an array of the strings with vowels
// removed.

function removeVowels(words) {
  return words.map(word => word.replace(/[aeiou]/ig, ''));
}

console.log(
  removeVowels(['abcdefghijklmnopqrstuvwxyz'])         // ["bcdfghjklmnpqrstvwxyz"]
);
console.log(
  removeVowels(['green', 'YELLOW', 'black', 'white'])  // ["grn", "YLLW", "blck", "wht"]
);
console.log(
  removeVowels(['ABC', 'AEIOU', 'XYZ'])                // ["BC", "", "XYZ"]
);