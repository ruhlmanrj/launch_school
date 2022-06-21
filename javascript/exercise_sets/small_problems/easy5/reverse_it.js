// Takes a string containing 1 or more space separated words and returns a new
// string with words greater than or equal to 5 characters in reverse order.

// string => array
// iterate and conditionally reverse word
// return joined

function reverseWords(string) {
  const words = string.split(' ');

  return words.map(word => {
    if (word.length < 5) {
      return word;
    } else {
      reverseChars = word.split('').reverse();
      return reverseChars.join(''); 
    }
  })
  .join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"
