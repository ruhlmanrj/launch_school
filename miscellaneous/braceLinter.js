/**
 * Defines a `Stack` class and uses it to implement a linter for syntax
 * errors involving braces.
 */

 class Stack {
  #stack = [];

  top() {
    return this.#stack[this.#stack.length - 1];
  }

  push(value) {
    this.#stack.push(value);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('UnderflowError: Cannot pop value from empty stack.');
    }
    return this.#stack.pop();
  }

  isEmpty() {
    return this.#stack.length === 0;
  }
}

function lintBraces(string) {
  const stack = new Stack();
  const openBraces = /[\(\[\{]/;
  const isNotBrace = (char) => /[^\[\]\(\)\{\}]/.test(char);
  const compliments = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (const char of string) {
    if (isNotBrace(char)) {
      continue;
    }

    if (openBraces.test(char)) {
      stack.push(char);
      continue;
    }

    if (stack.isEmpty()) {
      throw new SyntaxError('Unmatched closing brace');
    }

    if (compliments[char] === stack.top()) {
      stack.pop();
    } else {
      throw new SyntaxError('Unmatched closing brace');
    }
  }

  if (stack.isEmpty()) {
    console.log('Brace syntax is valid.');
  } else {
    throw new SyntaxError('Unmatched opening brace(s)');
  }
}

// valid syntax
const code = 'const arr = [1, 2, 3].concat([4, 5, 6]); const obj = { foo: 1 }';
lintBraces(code);// valid syntax