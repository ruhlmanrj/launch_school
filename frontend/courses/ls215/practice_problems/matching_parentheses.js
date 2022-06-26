// Takes a string and returns a boolean value indicative of whether it has
// balanced parentheses.

function isBalanced(string) {
  let parensCount = 0;

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === '(') {
      parensCount += 1;
    } else if (string[i] === ')') {
      parensCount -= 1;
    }

    if (parensCount < 0) return false;
  }

  return parensCount === 0;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false


// Further Exploration
//
// Why wouldn't our current solution work if `array.prototype.forEach` was
// used instead of the `for` loop?
//
// The main problem is that `forEach` does not allow for returning early from
// its calling function. Thus, the strings will always be iterated through in
// their entirety, which is inefficient; but worse than that, the condition
// checking for a negative count will never come into play and therefore it
// becomes possible that mismatched parens go undetected.
