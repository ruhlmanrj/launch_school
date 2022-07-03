// Takes a template with placeholders for parts of speech, and returns that
// template with the placeholders substituted for the part of speech it
// represents.

// - Create a regex that matches placeholders in the template
// - For consistency, use '${PART_OF_SPEECH}' as placeholder
// - Create an object with keys equal to all possible placeholders
//   Values can be an array of words for its part of speech
// - Use the string `replace` function with the regex a callback for args
//     - Use the `random` math function to generate a random index
//       within the range for the indexes of the parts of speech arrays
//     - Return the element within the object with the match as
//       a key from the function

// Algorithm:
// - Initialize a regex that matches placeholders, e.g. '${PLACEHOLDER}'
// - Initialize an object with each possible placeholder as a key and
//   an array of parts of speech for that placeholder.
//   - Parts of speech: adjective, nouns, verbs, adverbs
// - Replace the placeholders in the string by using regex
// - Iterate through each match
//   - Obtain a random number within the range of the parts of speech
//     array indexes (within the obj)
//   - Use the match as the key for referencing a property value from
//     the object (array for part of speect)
//   - Return an element (word) at the randomly generated index

function madlibs(template) {
  const parsePlaceholders = /\${[a-z]+}/g;
  const partsOfSpeech = {
    '${adjective}': ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
    '${adverb}': ['easily', 'lazily', 'noisily', 'excitedly'],
    '${noun}': ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
    '${verb}': ['jumps', 'lifts', 'bites', 'licks', 'pats'],
  };

  return template.replace(parsePlaceholders, placeholder => {
    return partOfSpeechFor(placeholder, partsOfSpeech)
  });
}

function partOfSpeechFor(placeholder, partsOfSpeech) {
  const examples = partsOfSpeech[placeholder];
  const index = randIndexUpto(examples.length - 1)

  return examples[index];
}

function randIndexUpto(max) {
  return Math.floor((Math.random() * (max + 1)));
}

const template = 'The ${adjective} brown ${noun} ${adverb} ${verb} the ' +
                 '${adjective} yellow ${noun}, who ${adverb} ${verb} his ' +
                 '${noun} and looks around.'

console.log(madlibs(template));
