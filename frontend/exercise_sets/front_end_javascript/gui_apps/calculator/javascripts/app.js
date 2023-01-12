/* A calculator app using JQuery

===== Features
- Standard operations
  - Add
  - Subtract
  - Multiply
  - Divide
  - Modulo

- Additional operations
  - Negation
  - Clear all
  - Clear entry

- Supports fractional numbers
- Shows operation history
- Result size is dynamically adjusted to fit to calculator window
- Repeated clicks on equals repeats previous operation
- Clicking a new operation will automatically execute a queued operation
- Will display error message if a divide by zero is attempted and subsequent
  attemps to use buttons that wouldn't make sense in that context produce a
  light beeping sound
- Attempts to use multiple decimal points in a number will produce the beep

*/

const Adjust = {
  fontSizeFor(text, availableWidth, maxFontSize) {
    let testFontSize = maxFontSize;
    let consumedWidth = this.widthAtSize(text, testFontSize);

    while (consumedWidth > availableWidth) {
      testFontSize -= 1;
      consumedWidth = this.widthAtSize(text, testFontSize);
    }

    return testFontSize;
  },

  widthAtSize(text, fontSize) {
    const $box = $(document.createElement('div'));
    $box.addClass('width-test').css('font-size', fontSize).text(text);

    $(document.body).append($box);
    const width = $box.innerWidth();
    $box.remove();

    return width;
  },
};

class Calculator {
  constructor() {
    this.value = 0;
    this.history = [];
  }

  reset() {
    this.value = 0;
    this.history = [];
  }

  add(number) {
    number = Number(number);

    this.value += number;
    this.updateHistory('add', number);
    return this.value;
  }

  subtract(number) {
    number = Number(number);

    this.value -= number;
    this.updateHistory('subtract', number);
    return this.value;
  }

  multiply(number) {
    number = Number(number);

    this.value *= number;
    this.updateHistory('multiply', number);
    return this.value;
  }

  divide(number) {
    number = Number(number);

    const result = this.value / number;
    const divideByZero = Math.abs(result) === Infinity;
    this.value = divideByZero ? NaN : result;

    this.updateHistory('divide', number);
    return this.value;
  }

  modulo(number) {
    number = Number(number);

    this.value %= number;
    this.updateHistory('modulo', number);
    return this.value;
  }

  repeatLast() {
    if (this.history.length === 0) return undefined;

    const { operation, number } = this.history.at(-1);
    return this[operation](number);
  }

  updateHistory(operation, number) {
    this.history.push({ operation, number });
  }
}

class CalculatorView {
  constructor() {
    this.elms = {
      $buttons: $('.buttons'),
      $decimalPoint: $('.point'),
      $entry: $('.entry'),
      $operations: $('.operations'),
    };
  }

  renderOperations(history, pendingOperation) {
    const MAX_LINE_ENTRIES = -10;
    const CHARS_PER_LINE = 35;
    const completeOpsOnly = /(?<=[-+/*%] ).*/;

    let ops = '';
    ops += history[0].number;
    history = history.slice(MAX_LINE_ENTRIES).slice(1);

    history.forEach(({ operation, number }) => {
      ops += ` ${operation} ${number}`;
    });
    ops += ` ${pendingOperation}`;

    if (ops.length > CHARS_PER_LINE) {
      ops = ops.slice(-CHARS_PER_LINE).match(completeOpsOnly);
    }

    this.operationsText = ops;
  }

  get operationsText() {
    return this.elms.$operations.text();
  }

  set operationsText(newText) {
    this.elms.$operations.text(newText);
  }

  get entryText() {
    return this.elms.$entry.text();
  }

  set entryText(newText) {
    this.adjustEntryFontSize(String(newText));
    this.elms.$entry.text(String(newText));
  }

  adjustEntryFontSize(stringNum) {
    const entry = this.elms.$entry[0];
    entry.style.fontSize = '';

    const width = entry.clientWidth;
    const fontSizeStr = window.getComputedStyle(entry).fontSize;
    const fontSize = parseInt(fontSizeStr, 10);

    const newSize = Adjust.fontSizeFor(stringNum, width, fontSize);
    entry.style.fontSize = newSize + 'px';
  }
}

class CalculatorApp {
  constructor(calculator, view) {
    this.calculator = calculator;
    this.view = view;

    this.bindHandlers();
    this.reset();
  }

  reset() {
    this.view.operationsText = '';
    this.view.entryText = '0';
    this.overwriteEntry = true;
    this.pendingOperation = null;
    this.calculator.reset();
  }

  bindHandlers() {
    const $buttons = this.view.elms.$buttons;
    $buttons.on('click', '.number, .point', () => this.handleInputClick());
    $buttons.on('click', '.number', e => this.handleNumberClick(e));
    $buttons.on('click', '.point', () => this.handleDecimalPointClick());

    const selectorsForNaNError = '#equals, #negate, .operation';
    $buttons.on('click', selectorsForNaNError, e => this.checkForNaNError(e));

    $buttons.on('click', '.operation', e => this.handleOperationClick(e));
    $buttons.on('click', '#equals', () => this.handleEqualsClick());

    $buttons.on('click', '#clear-entry', () => this.handleClearEntryClick());
    $buttons.on('click', '#clear-all', () => this.handleClearAllClick());
    $buttons.on('click', '#negate', () => this.handleNegateClick());
  }

  handleInputClick() {
    const lastOpWasEquals = this.pendingOperation === 'equals';
    const calcIsNaN = Number.isNaN(this.calculator.value);
    if (lastOpWasEquals || calcIsNaN) this.reset();
  }

  handleNumberClick(e) {
    const number = $(e.target).text();

    if (this.overwriteEntry) {
      this.view.entryText = number;
      if (number !== '0') this.overwriteEntry = false;
    } else {
      this.view.entryText += number;
    }
  }

  handleDecimalPointClick() {
    const hasPoint = /\./.test(this.view.entryText);

    if (this.overwriteEntry) {
      this.view.entryText = '0.';
      this.overwriteEntry = false;
    } else if (hasPoint) {
      this.playErrorSound();
    } else {
      this.view.entryText += '.';
    }
  }

  handleEqualsClick() {
    if (this.pendingOperation === 'equals') {
      this.view.entryText = this.calculator.repeatLast();
    } else if (this.pendingOperation) {
      const result = this.performPendingOperation();
      if (!this.validateNaNResult(result)) return;
      this.view.entryText = result;
      this.pendingOperation = 'equals';
    }

    this.view.operationsText = '';
  }

  handleOperationClick(e) {
    const nextOperation = e.target.id;

    if (!this.pendingOperation) {
      this.calculator.add(Number(this.view.entryText));
    } else if (this.pendingOperation !== 'equals') {
      const result = this.performPendingOperation();
      if (!this.validateNaNResult(result)) return;
      this.view.entryText = result;
    }

    this.pendingOperation = nextOperation;
    this.processRenderOperations();
    this.overwriteEntry = true;
  }

  handleClearAllClick() {
    this.reset();
  }

  handleClearEntryClick() {
    const calcIsNaN = Number.isNaN(this.calculator.value);
    if (this.pendingOperation === 'equals' || calcIsNaN) {
      this.reset();
    } else {
      this.view.entryText = '0';
      this.overwriteEntry = true;
    }
  }

  handleNegateClick() {
    if (this.view.entryText === '0') return;

    const negated = Number(this.view.entryText) * -1;
    this.view.entryText = String(negated);
  }

  validateNaNResult(result) {
    if (Number.isNaN(result)) {
      this.view.operationsText = '';
      this.view.entryText = 'Not a number';
      this.overwriteEntry = true;
      return false;
    }

    return true;
  }

  checkForNaNError(e) {
    if (Number.isNaN(this.calculator.value)) {
      e.stopImmediatePropagation();
      this.playErrorSound();
    }
  }

  performPendingOperation() {
    const entryNumber = this.view.entryText;
    return this.calculator[this.pendingOperation](entryNumber);
  }

  processRenderOperations() {
    const replaceWithSymbol = ({ operation, number }) => ({
      operation: this.symbolFor(operation),
      number,
    });

    const history = this.calculator.history.map(replaceWithSymbol);
    const lastSymbol = this.symbolFor(this.pendingOperation);

    this.view.renderOperations(history, lastSymbol);
  }

  playErrorSound() {
    new Audio('./sounds/error.mp3').play();
  }

  symbolFor(operation) {
    const ops = {
      add: '+',
      subtract: '-',
      multiply: '*',
      divide: '/',
      modulo: '%',
    };

    return ops[operation];
  }
}

new CalculatorApp(new Calculator(), new CalculatorView());
