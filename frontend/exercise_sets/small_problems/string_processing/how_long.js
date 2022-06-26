// Takes a string and returns an array that contains every word from the string
// combined with its length.

function wordLengths(phrase) {
  const parseWords = /\S+/g;
  return phrase?.match(parseWords)
               ?.map(wordWithLength) || [];
}

function wordWithLength(word) {
  return word + ' ' + word.length;
}

console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []
