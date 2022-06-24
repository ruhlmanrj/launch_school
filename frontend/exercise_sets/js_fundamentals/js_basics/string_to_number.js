// Takes a string and returns the numeric representation of that string.

function stringToInteger(string) {
  let number = 0;
  let power  = (string.length - 1);

  for (let i = 0; i < string.length; i++) {
    number += (string[i] * 10**power);
    power--;
  }

  return number;
}

console.log(stringToInteger('4321'));
console.log(stringToInteger('570'));
