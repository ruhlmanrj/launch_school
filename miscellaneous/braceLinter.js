/**
 * Defines a `Stack` class and uses it to implement a linter for syntax
 * errors involving braces.
 */

 class Stack {
  #data = [];

  read() {
    return this.#data[this.#data.length - 1];
  }

  push(value) {
    this.#data.push(value);
  }

  pop() {
    return this.#data.pop();
  }
}

function lintBraces(string) {
  const compliments = {
    ')': '(',
    ']': '[',
    '}': '{'
  };
  const stack = new Stack();
  const openBraces = /[\(\[\{]/;
  const isNotBrace = (char) => /[^\[\]\(\)\{\}]/.test(char);
  const stackIsEmpty = () => !stack.read();
  const isOpenBrace = (char) => openBraces.test(char);
  const braceMistmatch = (char) => compliments[char] !== stack.pop();

  for (const char of string) {
    if (isNotBrace(char)) {
      continue;
    }

    if (isOpenBrace(char)) {
      stack.push(char);
      continue;
    }

    if (stackIsEmpty()) {
      throw new SyntaxError('Unmatched closing brace');
    }

    if (braceMistmatch(char)) {
      throw new SyntaxError('Unmatched closing brace');
    }
  }

  if (!stackIsEmpty()) {
    throw new SyntaxError('Unmatched opening brace(s)');
  }
}

// valid syntax
const code = 'const arr = [1, 2, 3].concat([4, 5, 6]); const obj = { foo: 1 }';
lintBraces(code);// valid syntax