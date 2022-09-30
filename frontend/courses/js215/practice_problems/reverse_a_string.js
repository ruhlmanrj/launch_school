// Takes a string and returns it reversed.

// Solution 1

// function reverse(string) {
//   return string.split('').reverse().join('');
// }

function reverse(string) {
  let reversed = '';
  const lastIndex = string.length - 1;
  for (let i = lastIndex; i >= 0; i -= 1) {
    reversed += string[i];
  }

  return reversed;
}

console.log(reverse('olleh'));
