// calculator.js

class Calc {
  constructor() {
    this.value = 0;
    this.prevOp = null;
    this.replaceEntryText = true;

    this.defineOps();

    this.opWindow = document.querySelector('#op-window');
    this.entryWindow = document.querySelector('#entry-window');
    this.buttons = document.querySelector('#buttons'); 

    this.templates = {};

    this.cacheTemplates();
    this.renderButtons();
    this.bind();
  }

  bind() {
    this.buttons.addEventListener('click', this.handleButtonClick.bind(this));
  }

  handleButtonClick(e) {
    if (e.target.tagName !== 'BUTTON') { return; }

    const choice = e.target.textContent;

    if (choice.match(/[.\d]/)) {
      this.handleNumberDot(choice);
    } else if (choice.match(/[-+/x%]/)) {
      this.handleMathOp(choice);
    } else {
      this.handleOtherOp(choice);
    }
  }

  handleNumberDot(number) {
    const isDot = number === '.';

    if (this.replaceEntryText) {
      this.entryText = (isDot ?  '0.' : number);
      this.replaceEntryText = false;
    } else {
      const hasDot = this.entryText.includes('.');
      if (isDot && hasDot) { return; }
      this.entryText += number;
    }
  }

  handleMathOp(op) {
    const entryNumber = Number(this.entryText);

    if (!this.prevOp) {
      this.prevOp = op;
      this.value = entryNumber;
    } else {
      this.ops[this.prevOp](entryNumber);
      this.prevOp = op;
    }

    this.opText += ` ${entryNumber} ${op}`;
    this.entryText = this.value;

    this.replaceEntryText = true;
  }

  handleOtherOp(op) {
    switch (op) {
      case 'CE':
        this.entryText = '0';
        this.replaceEntryText = true;

        break;
      case 'C':
        this.entryText = '0';
        this.opText = '';
        this.value = 0;
        this.prevOp = null;
        this.replaceEntryText = true;

        break;
      case 'NEG':
        const isNeg = this.entryText[0] === '-';
        this.entryText = (isNeg ? this.entryText.slice(1) : '-' + this.entryText);

        break;
      case '=':
        const entryNumber = Number(this.entryText);
        this.ops[this.prevOp](entryNumber);
        this.opText = '';
        this.entryText = this.value;
        this.prevOp = null;

        break;
    }
  }

  renderButtons() {
    const buttons = [
      'CE', 'C', 'NEG', '/',
      '7', '8', '9', 'x',
      '4', '5', '6', '-',
      '1', '2', '3', '+',
      '0', '.', '%', '='
    ];

    const buttonsHTML = this.templates.buttons({ buttons });
    this.buttons.innerHTML = buttonsHTML;
  }

  cacheTemplates() {
    const templates = document.querySelectorAll('[type*="template"]');

    for (const { dataset, text } of templates) {
      this.templates[dataset.name] = Handlebars.compile(text);
    }
  }

  defineOps() {
    const self = this;

    this.ops = {
      '+': n => self.value += n,
      '-': n => self.value -= n,
      'x': n => self.value *= n,
      '/': n => self.value /= n,
      '%': n => self.value %= n,
    };
  }

  get entryText() {
    return this.entryWindow.textContent;
  }

  set entryText(newText) {
    this.entryWindow.textContent = newText;
  }

  get opText() {
    return this.opWindow.textContent;
  }

  set opText(newText) {
    this.opWindow.textContent = newText;
  }
}

const calc = new Calc();