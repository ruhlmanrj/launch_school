// Takes a string and returns a new string with the first and last
// letters of every word swapped.

function swap(string) {
  words = string.split(' ');

  words = words.map(word => {
    if (word.length <= 1) return word;

    const lastIndex = word.length - 1;
    return word[lastIndex] + word.slice(1, lastIndex) + word[0];
  });

  return words.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
