// Takes 4 input values representing parts of speech and uses them to generate
// a sentence; known colloquially as a 'Madlib'.

const rlSync = require('readline-sync');

const partsOfSpeech = ['noun', 'verb', 'adjective', 'adverb'];
let answers         = [];


partsOfSpeech.forEach(partOfSpeech => {
  let answer = rlSync.question(`Enter a ${partOfSpeech}: `);
  console.log(answer);
  answers.push(answer);
});

[noun, verb, adjective, adverb] = answers;
console.log(`The ${adjective} ${noun} likes to ${adverb} ${verb}.`);
