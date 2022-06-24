// Takes a string and replaces all sequences of 1 or more non-alphabetic
// characters with a space.

function cleanUp(dirtyString) {
  return dirtyString.replace(/[^a-z]+/ig, ' ');
}

console.log(
  cleanUp("---what's my +*& line?") === ' what s my line '
)
