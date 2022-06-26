// Takes a string and returns it with every word capitalized.

function wordCap(string) {
  return string.replace(/[^\s]+/g, match => {
    return match[0].toUpperCase() + match.slice(1).toLowerCase();
  });
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'
