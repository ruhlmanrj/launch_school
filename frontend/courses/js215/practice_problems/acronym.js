// Takes a string of words and returns an acronym based on those words.

function acronym(phrase) {
  return phrase.split(/[- ]/)
               .map(firstCharUpcased)
               .join('');
}

function firstCharUpcased(word) {
  return word[0].toUpperCase();
}

console.log(
  acronym('Hyper-text Markup Language')               // HTML
);
console.log(
  acronym('First In, First Out')                      // FIFO
);
console.log(
  acronym('Portable Network Graphics')                // PNG
);
console.log(
  acronym('PHP: HyperText Preprocessor')              // PHP
);
console.log(
  acronym('Complementary metal-oxide semiconductor')  // CMOS
);
