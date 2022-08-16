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
  const isOpenBrace = (char) => openBraces.test(char);
  const braceMistmatch = (openBrace, closeBrace) => {
   return compliments[closeBrace] !== openBrace;
  }
  const remainingBraces = () => {
    const braces = [];
    while (stack.read()) {
      braces.push(stack.pop());
    }
    return braces.join(', ');
  }

  for (const char of string) {
    if (isNotBrace(char)) {
      continue;
    }

    if (isOpenBrace(char)) {
      stack.push(char);
      continue;
    }

    const openBrace = stack.pop();
    if (!openBrace) {
      throw new SyntaxError(`No opening braces for '${char}'`);
    }
    
    if (braceMistmatch(openBrace, char)) {
      throw new SyntaxError(`'${openBrace}' mismatch with '${char}'`);
    }
  }

  if (stack.read()) {
    throw new SyntaxError(`Unmatched opening brace(s): ${remainingBraces()}`);
  }
}

// valid syntax
const code = 'const arr = [1, 2, 3].concat([4, 5, 6]); const obj = { foo: 1 }';
lintBraces(code);// valid syntax