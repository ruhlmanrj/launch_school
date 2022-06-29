// Takes a string containing words that represent digits and returns the string with
// the word digits substituted for numeric digits.

const DIGITS_MAP = [
  'zero', 'one', 'two', 'three', 'four', 'five','six', 'seven', 'eight', 'nine'
];

function wordToDigit(message) {
  const alternating = DIGITS_MAP.join('|');
  const parseDigitWords = new RegExp(`\\b(${alternating}})\\b`, 'gi');

  return message.replace(parseDigitWords, digitForWord);
}

function digitForWord(word) {
  return DIGITS_MAP.indexOf(word.toLowerCase())
}

console.log(
  wordToDigit('Please call me at five five five one two three four. Thanks.')
);
// "Please call me at 5 5 5 1 2 3 4. Thanks."

console.log(wordToDigit('The weight is done.'));
// "The weight is done."
