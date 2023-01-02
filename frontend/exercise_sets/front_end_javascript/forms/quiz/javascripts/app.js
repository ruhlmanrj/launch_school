// app.js

class Model {
  constructor() {
    this.questions = [
      {
        id: 1,
        description:
          "Who is the author of <cite>The Hitchhiker's Guide to the Galaxy</cite>?",
        options: [
          'Dan Simmons',
          'Douglas Adams',
          'Stephen Fry',
          'Robert A. Heinlein',
        ],
      },
      {
        id: 2,
        description:
          'Which of the following numbers is the answer to Life, the \
                  Universe and Everything?',
        options: ['66', '13', '111', '42'],
      },
      {
        id: 3,
        description: 'What is Pan Galactic Gargle Blaster?',
        options: ['A drink', 'A machine', 'A creature', 'None of the above'],
      },
      {
        id: 4,
        description: 'Which star system does Ford Prefect belong to?',
        options: ['Aldebaran', 'Algol', 'Betelgeuse', 'Alpha Centauri'],
      },
    ];

    this.answerKey = {
      1: 'Douglas Adams',
      2: '42',
      3: 'A drink',
      4: 'Betelgeuse',
    };
  }

  resultsForAnswers(chosenAnswers) {
    const results = [];

    for (const id in this.answerKey) {
      let outcome;
      const answer = this.answerKey[id];
      const chosenAnswer = chosenAnswers[id];

      if (answer === chosenAnswer) {
        outcome = 'correct';
      } else if (chosenAnswer) {
        outcome = 'incorrect';
      }

      results.push({ id, outcome, answer });
    }

    return results;
  }
}

class View {
  constructor() {
    this.elms = {
      $form: $('form'),
      $questionsList: $('.questions'),
      $resetBtn: $('.reset'),
      $submitBtn: $('.submit'),
    };

    this.temps = {
      questions: Handlebars.compile($('#questions-template').text()),
    };
  }

  renderQuestions(questions) {
    this.addQuestionPositions(questions);
    const questionsHTML = this.temps.questions(questions);
    this.elms.$questionsList.html(questionsHTML);
  }

  renderResults(results) {
    results.forEach(({ id, outcome, answer }) => {
      let message;
      if (outcome === 'correct') {
        message = 'Correct Answer';
      } else if (outcome === 'incorrect') {
        message = `Wrong Answer. Correct answer is: "${answer}".`;
      } else {
        message = `You didn't answer the question. Correct Answer is: "${answer}".`;
      }

      const displayElm = this.elms.$form.find(`p[data-id="${id}"]`);
      const classToAdd = outcome === 'correct' ? 'correct' : 'incorrect';
      displayElm.text(message).addClass(classToAdd);
    });
  }

  toggleSubmitBtn() {
    const currentValue = this.elms.$submitBtn.attr('disabled');
    this.elms.$submitBtn.attr('disabled', !currentValue);
  }

  addQuestionPositions(questions) {
    questions.forEach((question, idx) => (question.position = idx + 1));
  }
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.bindHandlers();
    this.reset();
  }

  bindHandlers() {
    this.view.elms.$form.submit((e) => this.handleSubmitQuiz(e));
    this.view.elms.$resetBtn.click(() => this.handleResetQuiz());
  }

  handleResetQuiz() {
    const $displayElms = this.view.elms.$form.find('.result-msg')
    $displayElms.removeClass('correct incorrect').text('');
    this.view.elms.$form[0].reset();
    this.view.toggleSubmitBtn();
  }

  handleSubmitQuiz(e) {
    e.preventDefault();

    const $checkedRadios = $(e.target).find(':checked');
    const answers = this.answersFromRadios([...$checkedRadios]);
    const results = this.model.resultsForAnswers(answers);

    this.view.renderResults(results);
    this.view.toggleSubmitBtn();
  }

  reset() {
    const questions = this.copyQuestions(this.model.questions);
    this.view.renderQuestions(questions);
    this.view.toggleSubmitBtn();
  }

  answersFromRadios(radios) {
    const answers = {};
    radios.forEach(({ name, value }) => (answers[name] = value));
    return answers;
  }

  copyQuestions(questions) {
    return questions.map((question) => Object.assign({}, question));
  }
}

const app = new Controller(new Model(), new View());
