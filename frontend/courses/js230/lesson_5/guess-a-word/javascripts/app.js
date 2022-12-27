// app.js

class App {
  constructor($wrapper) {
    this.setup($wrapper);
    this.reset();
  }

  setup($wrapper) {
    const find = (className) => $wrapper.find(className);
    this.elms = {
      $apples: find('.apples'),
      $guesses: find('.guesses'),
      $msg: find('.result-msg'),
      $newGame: find('.new-game'),
      $newWord: find('.new-word'),
      $word: find('.word'),
    };

    this.temps = {
      guess: Handlebars.compile($('#guess-template').html()),
      word: Handlebars.compile($('#word-template').html()),
    };

    this.setWords();
    this.bindHandlers();
  }

  setWords() {
    this.words = ['happy', 'sad', 'mad', 'glad'];
  }

  bindHandlers() {
    $(document).on('keydown', (e) => this.handleGuess(e));
    this.elms.$newWord.on('click', (e) => this.handleNewWord(e));
    this.elms.$newGame.on('click', (e) => this.handleNewGame(e));
  }

  handleGuess(e) {
    const guess = e.key;
    if (this.isBadGuess(guess)) return;

    const matchIdxs = this.matchingIndexes(this.word, guess);

    let won;
    let lost;
    if (matchIdxs) {
      this.replaceMatchingIdxs(this.guess, matchIdxs, guess);
      won = this.guess.every((letter) => letter !== '');
    } else {
      this.remainGuesses--;
      this.removeApple();
      lost = this.remainGuesses === 0;
    }

    if (won || lost) this.handleWinLose(won);
    this.madeGuesses.push(guess);
    this.render(guess);
  }

  removeApple() {
    const left = this.remainGuesses;
    this.elms.$apples
      .removeClass(`apples-${left + 1}`)
      .addClass(`apples-${left}`);
  }

  isBadGuess(guess) {
    return (
      !/^[A-Za-z]$/.test(guess) ||
      this.madeGuesses.includes(guess) ||
      this.gameOver
    );
  }

  matchingIndexes(letters, searchLetter) {
    const idxs = [];

    letters.forEach((letter, idx) => {
      if (letter === searchLetter) idxs.push(idx);
    });

    return idxs.length > 0 ? idxs : undefined;
  }

  replaceMatchingIdxs(array, idxs, elm) {
    idxs.forEach((idx) => (array[idx] = elm));
  }

  handleWinLose(won) {
    this.gameOver = true;
    $('body').addClass(won ? 'win' : 'loss');
    this.elms.$msg.text(`You ${won ? 'won' : 'lost'}!`).removeClass('hidden');
    this.elms.$newWord.removeClass('hidden');
  }

  render(guessLetter) {
    this.elms.$guesses.append(this.temps.guess(guessLetter));
    this.elms.$word.html(this.temps.word(this.guess));
  }

  handleNewWord(e) {
    e.stopPropagation();

    if (this.words.length === 0) {
      this.endGame();
    } else {
      this.reset();
    }
  }

  handleNewGame(e) {
    e.stopPropagation();

    this.setWords();
    this.reset();
  }

  endGame() {
    this.elms.$newWord.addClass('hidden');
    this.elms.$newGame.removeClass('hidden');
    this.elms.$msg.text(
      "I've run out of words! Click the button below to get a new list (words will be the same.)"
    );
  }

  reset() {
    this.gameOver = false;
    this.word = this.chooseWord();
    const blanks = Array(this.word.length).fill('');
    this.guess = blanks;
    this.madeGuesses = [];
    this.remainGuesses = 6;

    this.elms.$word.html(this.temps.word(blanks));
    this.elms.$guesses.html('');

    this.elms.$newWord.addClass('hidden');
    this.elms.$newGame.addClass('hidden');
    this.elms.$msg.addClass('hidden');
    this.elms.$apples.attr('class', '');
    $('body').removeClass(['win', 'loss']);
  }

  chooseWord() {
    const maxIdx = this.words.length - 1;
    const idx = ~~(Math.random() * (maxIdx + 1));
    const word = this.words.splice(idx, 1)[0];
    return [...word];
  }
}

const app = new App($('main'));