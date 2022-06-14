// Compares two strings, 'a' and 'b', where 'b' is a potential substring
// of 'a'. Returns the starting index of the first or last occurence of
// 'b' within 'a' if it exists; if it does not exist then returns -1.

function indexOf(mainString, searchString) {
  for (let i = 0; i <= (mainString.length - searchString.length); i++) {

    let checkString = '';
    for (let j = i; j < i + searchString.length; j++) {
      checkString += mainString[j];
    }

    if (checkString === searchString) return i;
    }

  return -1;
  }

  function lastIndexOf(mainString, searchString) {
    for (let i = mainString.length - searchString.length; i >= 0; i--) {
  
      let checkString = '';
      for (let j = i; j < i + searchString.length; j++) {
        checkString += mainString[j];
      }
  
      if (checkString === searchString) return i;
      }
  
    return -1;
    }

console.log(indexOf('Some strings', 's')   === 5);
console.log(indexOf('Blue Whale', 'Whale') === 5);
console.log(indexOf('Blue Whale', 'Blute') === -1);
console.log(indexOf('Blue Whale', 'leB')   === -1);

console.log(lastIndexOf('Some strings', 's')                 === 11);
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale') === 19);
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all')   === -1);
