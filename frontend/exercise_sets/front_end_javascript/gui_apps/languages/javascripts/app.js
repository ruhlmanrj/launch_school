// app.js

'use strict';

class Model {
  constructor() {
    this.list = [
      {
        name: 'Ruby',
        description:
          'Ruby is a dynamic, reflective, object-oriented, ' +
          'general-purpose programming language.'
      },

      {
        name: 'JavaScript',
        description:
          'JavaScript is a high-level, dynamic, untyped, and interpreted ' +
          'programming language. It has been standardized in the ECMAScript language ' +
          'specification. Alongside HTML and CSS, JavaScript is one of the three core ' +
          'technologies of World Wide Web content production; the majority of websites employ ' +
          'it, and all modern Web browsers support it without the need for plug-ins. JavaScript ' +
          'is prototype-based with first-class functions, making it a multi-paradigm language, ' +
          'supporting object-oriented, imperative, and functional programming styles.',
      },

      {
        name: 'Lisp',
        description:
          'Lisp (historically, LISP) is a family of computer programming languages ' +
          'with a long history and a distinctive, fully parenthesized prefix notation. ' +
          'Originally specified in 1958, Lisp is the second-oldest high-level programming ' +
          'language in widespread use today. Only Fortran is older, by one year. Lisp has changed ' +
          'since its early days, and many dialects have existed over its history. Today, the best ' +
          'known general-purpose Lisp dialects are Common Lisp and Scheme.',
      },
    ];
  }

  getLang(searchName) {
    return this.list.find(({ name }) => name === searchName);
  }
}

class View {
  constructor(model) {
    this.model = model;
    this.elms = {
      langList: document.querySelector('ul'),
    };

    this.rendersLangs();
    this.bindHandlers();
  }

  rendersLangs() {
    Handlebars.registerHelper('shorten', (text) => `${text.slice(0, 120)}...`);
    Handlebars.registerHelper('longText', function () {
      console.log(this);
      return this.description.length > 120;
    });

    const tempTxt = document.querySelector('[data-name="lang-list-temp"]').text;
    const tempFxn = Handlebars.compile(tempTxt);

    this.elms.langList.innerHTML = tempFxn(this.model.list);
  }

  bindHandlers() {
    this.elms.langList.addEventListener('click', (e) => this.showMore(e));
    this.elms.langList.addEventListener('click', (e) => this.showLess(e));
  }

  showMore(e) {
    const button = e.target;
    if (button.dataset.show !== 'more') return;

    const selector = `p[data-lang="${button.dataset.lang}"]`;
    const description = document.querySelector(selector);

    this.expandDescription(description);
    this.showOtherButton(button);
  }

  showLess(e) {
    const button = e.target;
    if (button.dataset.show !== 'less') return;

    const selector = `p[data-lang="${button.dataset.lang}"]`;
    const description = document.querySelector(selector);

    this.shrinkDescription(description);
    this.showOtherButton(button);
  }

  shrinkDescription(description) {
    const d = description;

    const tallHeight = d.style.height;
    const fullText = d.textContent;
    const partialText = `${fullText.slice(0, 120)}...`;

    d.textContent = partialText;
    d.style.height = null;
    const shortHeight = this.calcHeightFor(d);
    d.textContent = fullText;
    d.style.height = tallHeight;

    setTimeout(() => (d.style.height = shortHeight), 0);
    setTimeout(() => (d.textContent = partialText), 400);
  }

  expandDescription(description) {
    const d = description;

    d.style.height = null;
    const shortHeight = this.calcHeightFor(d);
    const fullText = this.model.getLang(d.dataset.lang).description;
    d.textContent = fullText;
    const tallHeight = this.calcHeightFor(d);

    d.style.height = shortHeight;
    setTimeout(() => (d.style.height = tallHeight), 0);
  }

  showOtherButton(oldBtn) {
    const lang = oldBtn.dataset.lang;
    const newBtn = document.querySelector(`[data-lang="${lang}"].hidden`);
    newBtn.classList.remove('hidden');
    oldBtn.classList.add('hidden');

    newBtn.disabled = true;
    setTimeout(() => (newBtn.disabled = false), 400);
  }

  calcHeightFor(element) {
    return window.getComputedStyle(element).height;
  }
}

const view = new View(new Model());
