/**
 * Works with calculator.html and calculator.css to implement a simple
 * calculator program. Supports add, subtract, multiply and divide operations;
 * includes a 'clear' button to reset the calculator.
 */

function calculate(operation, leftNum, rightNum) {
  switch (operation) {
    case 'add':
      return leftNum + rightNum;
    case 'subtract':
      return leftNum - rightNum;
    case 'multiply':
      return leftNum * rightNum;
    case 'divide':
      return leftNum / rightNum;
  }
}

function formatResult(number) {
  const DIGITS_AFTER_DECIMAL = 6;

  const roundedString = number.toFixed(DIGITS_AFTER_DECIMAL);
  const trailingZeroesRemoved = Number(roundedString);

  return String(trailingZeroesRemoved);
}

const formCalc = document.getElementById('calculation');
const paragraphResult = document.getElementById('result');

formCalc.addEventListener('submit', event => {
  event.preventDefault();

  const leftNum = formCalc['left-number'].value;
  const rightNum = formCalc['right-number'].value;
  const operation = formCalc.operation.value;

  const result = calculate(operation, +leftNum, +rightNum);
  paragraphResult.textContent = formatResult(result);
});

formCalc.addEventListener('reset', () => paragraphResult.textContent = '0');
