// A random number between 1 and 100 is generated, then guesses are accepted
// from the client until the correct number is guessed.

class GuessingGame {
  constructor() {
    this.cacheNodes();
    this.resetGame();
  }

  cacheNodes() {
    this.guessForm = document.querySelector('form');
    this.guessMessage = document.querySelector('p');
    this.guess = document.querySelector('#guess');
    this.newGame = document.querySelector('a');
  }

  resetGame() {
    this.gameOver = false;
    this.guessForm.reset();
    this.displayMessage('Choose a number:');
    this.secretNumber = this.getSecretNumber();
    this.addedListeners = [];
    this.bind();
  }

  getSecretNumber() {
    return ~~(Math.random() * 100) + 1;
  }

  bind() {
    const handleGuess = e => {
      e.preventDefault();
      this.handleGuess();
    }

    this.guessForm.addEventListener('submit', handleGuess);
    this.newGame.addEventListener('click', this.handleNewGame.bind(this));
  }

  handleGuess() {
    if (this.gameOver) { return; }

    const guess = Number(this.guess.value);
    if (guess > this.secretNumber) {
      this.displayMessage('Your guess is too high');
    } else if (guess < this.secretNumber) {
      this.displayMessage('Your guess is too low');
    } else {
      this.displayMessage('You guessed the number!');
      this.gameOver = true;
    }
  }

  handleNewGame(e) {
    e.preventDefault();
    this.resetGame();
  }

  displayMessage(message) {
    this.guessMessage.textContent = message;
  }
}

new GuessingGame();
