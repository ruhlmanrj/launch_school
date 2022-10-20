// sign_up.js

const signup = {
  init() {
    this.form = document.querySelector('form');
    this.cards = document.querySelector('#cards');
    this.formDataMessage = document.querySelector('#form-data-message');
    this.templates = {};
    this.disallowedChars = {
      'first-name': /[^a-zA-z'\s]/,
      'last-name': /[^a-zA-z'\s]/,
      'phone': /[^\d]/,
      'card': /[^\d]/,
    };
    this.cacheTemplates();
    this.bind();
  },

  cacheTemplates() {
    const templates = document.querySelectorAll('[type="text/x-handlebars-template"]');
    for (const template of templates) {
      this.templates[template.dataset.id] = Handlebars.compile(template.text);
    }
  },

  bind() {
    this.form.addEventListener('focusin', this.handleFocusin);
    this.form.addEventListener('focusout', this.handleFocusout.bind(this));
    this.form.addEventListener('submit', this.handleSubmit.bind(this));
    this.form.addEventListener('keydown', this.handlekeydown.bind(this));
    this.cards.addEventListener('keyup', this.handleKeyupForCards);
  },

  handleKeyupForCards(e) {
    const nextSib = e.target.nextElementSibling;
    const keyIsNotDigit = !e.key.match(/\d/);
    const isNotTabForwardable = e.target.tagName !== 'INPUT' || keyIsNotDigit ||
                                !nextSib;

    if (isNotTabForwardable) { return; }

    const reachedMax = e.target.value.length >= e.target.maxLength;
    if (reachedMax) {
      nextSib.focus();
    }
  },

  handleFocusin(e) {
    if (e.target.tagName !== 'INPUT') { return; }

    const nextSib = e.target.nextElementSibling;

    if (nextSib && nextSib.dataset.type === 'error-message') {
      nextSib.remove()
      e.target.classList.remove('error');
    }
  },

  handleFocusout(e) {
    if (e.target.tagName !== 'INPUT') { return; }

    if (this.form.checkValidity() && this.isMainErrorMessage()) {
      this.form.children[0].remove();
      return;
    }

    this.displayControlError(e.target);
  },

  handleSubmit(e) {
    e.preventDefault();

    if (this.form.checkValidity()) {
      this.displayFormData();
      this.form.reset();
      return;
    }

    this.displayControlErrors();

    if (!this.isMainErrorMessage()) {
      const message = 'Form cannot be submitted until errors are corrected.'
      this.form.insertAdjacentHTML('afterbegin', this.templates.error(message));
    }
  },

  handlekeydown(e) {
    if (this.isInvalidControlKey(e.target, e.key)) {
      e.preventDefault();
    }
  },

  displayFormData() {
    const data = new FormData(this.form);
    const cardNumber = data.getAll('card').join('');
    data.set('card', cardNumber);

    const params = new URLSearchParams(data);
    this.formDataMessage.textContent = params;
  },

  getValidityMessage(control) {
    const validity = control.validity;
    const purpose = control.dataset.for;
    let message;

    if (validity.valueMissing) {
      message = `${purpose} is a required field.`;
    } else if (validity.patternMismatch) {
      message = `Please enter a valid ${purpose}.`;
    } else if (validity.tooShort) {
      const minLength = control.minLength;
      message = `${purpose} must be at least ${minLength} characters long.`;
    }

    return message;
  },

  displayControlError(control) {
    const message = this.getValidityMessage(control);

    if (message) {
      control.classList.add('error');
      control.insertAdjacentHTML('afterend', this.templates.error(message));
    }
  },

  displayControlErrors() {
    for (const control of this.form.elements) {
      const noErrorMessage = !control.nextElementSibling;

      if (noErrorMessage) {
        this.displayControlError(control);
      }
    }
  },

  isMainErrorMessage() {
    return this.form.children[0].dataset.type === 'error-message';
  },

  isInvalidControlKey(control, key) {
    const disallowedChars = this.disallowedChars[control.name];
    return key.length === 1 && disallowedChars && key.match(disallowedChars);
  },
};

signup.init();
