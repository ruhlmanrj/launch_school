// This program takes a string as input and outputs the count of
// its alphabetic characters.

const rlSync = require('readline-sync');

let string = rlSync.question('Please enter a phrase: ');

// Uses a regex matching any non-alphabetic character and replaces
// each match with an empty string => new string
let letters = string.replace(/[^a-z]/gi, '');

// Letters is comprised entirely of alphabetic characters, outputs count.
console.log(`There are ${letters.length} letters in ${string}.`);
