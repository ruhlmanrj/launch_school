// Takes a string and a delimiter and outputs each substring separated by
// the delimiter.

function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }

  let outputString = '';
  for (i = 0; i < string.length; i++) {
    if (delimiter === '') {
      console.log(string[i]);

      continue;
    } else if (string[i] === delimiter) {
      console.log(outputString);
      outputString = '';

      continue;
    } else {
      outputString += string[i];
    }
  }

  if (outputString) console.log(outputString);
}

splitString('abc,123,hello world', ','); // Logs 'abc', '123', and 'hello world'
splitString('hello')                     // Logs 'ERROR: No delimiter'
splitString('hello', '');                // Logs 'h', 'e', 'l', 'l', 'o'
splitString('hello', ';');               // Logs 'hello'
splitString(';hello;', ';');             // Logs '' (blank line), 'hello'
