/**
 * Works with calculator.html and calculator.css to implement a simple
 * calculator program. Supports add, subtract, multiply and divide operations;
 * includes a 'clear' button to reset the calculator.
 */

class Calculator {
  constructor() {
    this.elms = {
      $clearBtn: $('.clear-btn'),
      $form: $('form'),
      $leftNum: $('[name="left-number"]'),
      $operation: $('select'),
      $resultMsg: $('p'),
      $rightNum: $('[name="right-number"]'),
    };

    this.ops = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b,
    };

    this.bindHandlers();
    this.setup();
  }

  bindHandlers() {
    this.elms.$form.submit(this.handleSubmit.bind(this));
    this.elms.$clearBtn.click(() => this.setup());
  }

  handleSubmit(e) {
    e.preventDefault();
    this.elms.$resultMsg.removeClass('error');
    this.elms.$resultMsg.text(this.getResult());
  }

  getResult() {
    const DIVIDE = '/';

    const leftNum = +this.elms.$leftNum.val();
    const rightNum = +this.elms.$rightNum.val();
    const op = this.elms.$operation.val();

    let result;
    const divByZero = op === DIVIDE && rightNum === 0;

    if (divByZero) {
      result = 'Cannot divide by zero';
      this.elms.$resultMsg.addClass('error');
    } else {
      result = this.ops[op](leftNum, rightNum);
    }

    return result;
  }

  setup() {
    this.elms.$form[0].reset();
    this.elms.$resultMsg.text(0);
    this.elms.$resultMsg.removeClass('error');
  }
}

const calc = new Calculator();
