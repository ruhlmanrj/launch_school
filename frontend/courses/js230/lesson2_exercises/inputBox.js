// Program that creates a custom input element

document.addEventListener('DOMContentLoaded', inputElementProgram);

function inputElementProgram() {
  let cursorTogglerId;

  const textField = document.querySelector('.text-field');
  const textFieldContent = document.querySelector('.content');

  const addFocusedClass = () => {
    textField.classList.add('focused');
  };

  const removeFocus = () => {
    textField.classList.remove('focused');
  };

  const displayCursor = () => {
    const toggleCursor = () => textField.classList.toggle('cursor');
    cursorTogglerId ||= setInterval(toggleCursor, 500);
  };

  const removeCursor = () => {
    clearInterval(cursorTogglerId);
    cursorTogglerId = null;
    textField.classList.remove('cursor');
  };

  const displayKeystroke = ({ key }) => {
    const isNotFocused = !textField.classList.contains('focused');
    if (isNotFocused) {
      return;
    }

    if (key === 'Backspace') {
      const content = textFieldContent.textContent;
      const lastIndex = content.length - 1;
      textFieldContent.textContent = content.slice(0, lastIndex);
    }

    if (key.length === 1) {
      textFieldContent.textContent += key;
    }
  }

  const textFieldClickCallbacks = (event) => {
    event.stopPropagation();
    [addFocusedClass, displayCursor].forEach(callback => callback(event));
  };

  const documentClickCallbacks = () => {
    [removeFocus, removeCursor].forEach(callback => callback());
  };

  textField.addEventListener('click', textFieldClickCallbacks);
  document.addEventListener('click', documentClickCallbacks);
  document.addEventListener('keydown', displayKeystroke);
}
