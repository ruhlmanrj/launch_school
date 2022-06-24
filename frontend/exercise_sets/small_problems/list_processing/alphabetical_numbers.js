// Takes an array of integers and returns that array sorted based
// on the English word for each number.

const NUMBER_WORDS = {
  0: 'zero', 1: 'one', 2: 'two', 3: 'three',
  4: 'four', 5: 'five', 6: 'six', 7: 'seven',
  8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven',
  12: 'twelve', 13: 'thirteen', 14: 'fourteen',
  15: 'fifteen', 16: 'sixteen', 17: 'seventeen',
  18: 'eighteen', 19: 'nineteen',
};

function numberWordSort(digits) {
  digits = digits.slice();

  return digits.sort((left, right) => {
    if (NUMBER_WORDS[left] > NUMBER_WORDS[right]) {
      return 1;
    } else if (NUMBER_WORDS[left] < NUMBER_WORDS[right]) {
      return -1;
    } else {
      return 0;
    }
  });
}

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
console.log(numberWordSort(numbers));
