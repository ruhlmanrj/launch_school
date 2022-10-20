// multiple-choice.js

class QuizModel {
  constructor(questions) {
    this.questions = questions;
  }

  getResults(answers) {
    const results = {};

    for (const { id, answer } of this.questions) {
      let isCorrect;

      if (answers[id] === answer) {
        isCorrect = true;
      } else if (answers[id]) {
        isCorrect = false;
      }

      results[id] = { isCorrect, answer };
    }

    return results;
  }
}

class QuizView {
  constructor(model) {
    this.model = model;
  
    this.questions = document.querySelector('#questions');
    this.submitButton = document.querySelector('#submit-answers');

    this.templates = {};
    this.cacheTemplates();

    this.renderQuestions();
    this.bind();
  }

  cacheTemplates() {
    const templates = document.querySelectorAll('[type*="template"]');

    for (const template of templates) {
      const name = template.dataset.name;
      this.templates[name] = Handlebars.compile(template.text);
    }
  }

  renderQuestions() {
    const questions = this.model.questions;
    const questionsHTML = this.templates.questions({ questions });
    this.questions.insertAdjacentHTML('afterbegin', questionsHTML);
  }

  bind() {
    this.questions.addEventListener('submit', this.handleSubmitAnswers.bind(this));
    this.questions.addEventListener('reset', this.handleQuestionsReset.bind(this));
  }

  handleSubmitAnswers(e) {
    e.preventDefault();
    this.submitButton.disabled = true;

    const radios = document.querySelectorAll(':checked');

    const answers = {};
    [...radios].forEach(({ name, value }) => answers[name] = value);

    const results = this.model.getResults(answers);
    this.displayResults(results);
  }

  handleQuestionsReset(e) {
    const messages = document.querySelectorAll('.result');

    for (const message of messages) {
      message.classList.remove('correct', 'incorrect');
      message.textContent = '';
    }

    this.submitButton.disabled = false;
  }

  displayResults(results) {
    const messages = document.querySelectorAll('.result');

    for (const message of messages) {
      this.updateResultMessage(message, results[message.dataset.id]);
    }
  }

  updateResultMessage(message, { isCorrect, answer }) {
    let text;

    if (isCorrect) {
      text = 'Correct Answer';
    } else if (isCorrect === false) {
      text = `Wrong Answer. The correct answer is: "${answer}"`;
    } else {
      text = `You didn't answer this question. Correct answer is: "${answer}"`;
    }

    message.classList.add(isCorrect ? 'correct' : 'incorrect');
    message.textContent = text;
  }
}

const questions = [
  {
    id: 1,
    content: "Who is the author of <cite>The Hitchhiker's Guide to the Galaxy</cite>?",
    options: ['Dan Simmons', 'Douglas Adams', 'Stephen Fry', 'Robert A. Heinlein'],
    answer: 'Douglas Adams',
  },
  {
    id: 2,
    content: 'Which of the following numbers is the answer to Life, the \
                  Universe and Everything?',
    options: ['66', '13', '111', '42'],
    answer: '42',
  },
  {
    id: 3,
    content: 'What is Pan Galactic Gargle Blaster?',
    options: ['A drink', 'A machine', 'A creature', 'None of the above'],
    answer: 'A drink',
  },
  {
    id: 4,
    content: 'Which star system does Ford Prefect belong to?',
    options: ['Aldebaran', 'Algol', 'Betelgeuse', 'Alpha Centauri'],
    answer: 'Betelgeuse',
  },
];

const model = new QuizModel(questions);
const view = new QuizView(model);

