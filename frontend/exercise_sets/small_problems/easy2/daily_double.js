// Takes a string argument and collapses sequences of consecutive identical
// characters into a single occurrence of that character.

function crunch(string) {
  let collapsed = ''

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[i + 1]) {
      collapsed += string[i];
    }
  }

  return collapsed;
}

console.log(crunch('ddaaiillyy ddoouubbllee') === 'daily double');
console.log(crunch('4444abcabccba')           === '4abcabcba');
console.log(crunch('ggggggggggggggg')         === 'g');
console.log(crunch('a')                       === 'a');
console.log(crunch('')                        === '');


// Further Exploration
//
// Part 1: What happens if the looping condition is modified such that iteration
//         ceases prior to the final index of a string.

// Answer: This would break the program because the final character would never
//         be included in the string to be returned from the function.

// Part 2: Solve the problem using regular expressions.
// Answer:


function crunch(string) {
  if (!string) return '';

  let regex   = /(.)\1*/g;
  let matches = string.match(regex);

  return matches.map(match => match[0])
                .join('');
}

// Part 3: Give examples of additional solutions that don't use
// regular expressions.
//
// Rather than include a character in the final string if the next
// character is different, a character could be added if the previous
// character was different.
