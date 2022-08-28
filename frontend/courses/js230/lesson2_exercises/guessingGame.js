// A random number between 1 and 100 is generated, then guesses are accepted
// from the client until the correct number is guessed.

// Generate a random number between 1 and 100, inclusive.
function randomNumber() {
  const MINIMUM = 1;
  const MAXIUMUM = 1;
  
  const difference = MAXIUMUM - MINIMUM;
  return Math.floor((Math.random() * (difference + 1))) + MINIMUM;
}

document.addEventListener('DOMContentLoaded', () => {
  const START_MESSAGE = 'Guess a number from 1 to 100';
  const DISABLED_BUTTON_BACKGROUND = 'rgba(255, 136, 136, 0.8)';
  const DISABLED_BUTTON_SHADOW = '1px 1px 5px inset red';

  const input = document.getElementById('guess');
  const form = document.querySelector('form');
  const paragraph = document.getElementById('message');
  const button = document.querySelector('[type="submit"]');
  const link = document.getElementById('new-game');

  let answer = randomNumber();
  let guessCount = 0;
  let guess;
  let message;

  function disableButton() {
    button.setAttribute('disabled', true);
    button.style.background = DISABLED_BUTTON_BACKGROUND;
    button.style.boxShadow = DISABLED_BUTTON_SHADOW;
  }

  function enableButton() {
    button.removeAttribute('disabled');
    button.removeAttribute('style');
  }

  const setGuess = () => {
    const preliminary = input.value;
    guess = isNaN(preliminary) ?
                   preliminary : Number(preliminary);
  };

  const setMessage = () => {
    if (answer > guess) {
      message = `My number is greater than ${String(guess)}`;
    } else if (answer < guess) {
      message = `My number is less than ${String(guess)}`;
    } else if (answer === guess) {
      const noun = (guessCount === 1 ? 'guess' : 'guesses');
      message = `That's my number! It took you ${String(guessCount)} ${noun}.`;
    } else {
      message = `'${guess}' is not a number. Try again.`;
    }
  };

  const displayMessage = () => {
    paragraph.textContent = message;
  };

  const playTurn = (event) => {
    event.preventDefault();

    guessCount += 1;
    [setGuess, setMessage, displayMessage].forEach(callback => {
      callback();
    });

    if (guess === answer) {
      disableButton();
    }
  }

  const resetGame = () => {
    guessCount = 0;
    answer = randomNumber();
    input.value = '';
    enableButton();

    message = START_MESSAGE;
    displayMessage();
  };

  form.addEventListener('submit', playTurn);
  link.addEventListener('click', resetGame);
});
