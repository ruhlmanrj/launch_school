/**
 * Adds showing and hiding functionality for descriptions of programming
 * languages. If the description is greater than 120 characters, the buttons
 * for toggling the display will be shown. If it is less, then the entire
 * description will be shown initially, without associated buttons for toggling.  
 */

const languages = [
  {
    name: 'Ruby',
    complete: 'Ruby is a dynamic, reflective, object-oriented, ' +
    'general-purpose programming language. It was designed and developed in the mid-1990s ' +
    'by Yukihiro Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, ' +
    'Smalltalk, Eiffel, Ada, and Lisp. It supports multiple programming paradigms, ' +
    'including functional, object-oriented, and imperative. It also has a dynamic type ' +
    'system and automatic memory management.'
  },

  {
    name: 'JavaScript',
    complete: 'JavaScript is a high-level, dynamic, untyped, and interpreted ' +
    'programming language. It has been standardized in the ECMAScript language ' +
    'specification. Alongside HTML and CSS, JavaScript is one of the three core ' +
    'technologies of World Wide Web content production; the majority of websites employ ' +
    'it, and all modern Web browsers support it without the need for plug-ins. JavaScript ' +
    'is prototype-based with first-class functions, making it a multi-paradigm language, ' +
    'supporting object-oriented, imperative, and functional programming styles.'
  },

  {
    name: 'Lisp',
    complete: 'Lisp (historically, LISP) is a family of computer programming languages ' +
    'with a long history and a distinctive, fully parenthesized prefix notation. ' +
    'Originally specified in 1958, Lisp is the second-oldest high-level programming ' +
    'language in widespread use today. Only Fortran is older, by one year. Lisp has changed ' +
    'since its early days, and many dialects have existed over its history. Today, the best '+
    'known general-purpose Lisp dialects are Common Lisp and Scheme.'
  },
  {
    name: 'C Language',
    complete: "C was created in the early 1970's.",
  }
];

languages.forEach(language => {
  if (language.complete.length <= 120) {
    language.short = true;
  } else {
    language.partial = language.complete.slice(0, 120) + '...';
  }
});

class LangViewer {
  constructor(languages) {
    this.cacheTemplates();
    this.langList = document.querySelector('#lang-list')
    this.displayLangs(languages);
    this.descriptions = document.querySelectorAll('dd');
    this.bind();
  }

  bind() {
    this.descriptions.forEach(desc => {
      desc.addEventListener('click', this.toggleDisplay);
    });
  }

  toggleDisplay(e) {
    if (e.target.tagName !== 'A') { return; }
    e.preventDefault();

    [...this.children].forEach(({ classList }) => {
      classList.toggle('hidden');
    });
  }

  cacheTemplates() {
    const descTempStr = document.querySelector('#description').textContent;
    Handlebars.registerPartial('description', descTempStr);

    const descsTempStr = document.querySelector('#descriptions').textContent;
    this.descriptionTemplate = Handlebars.compile(descsTempStr);
  }

  displayLangs(languages) {
    this.langList.innerHTML = this.descriptionTemplate({ descriptions: languages });
  }
}

new LangViewer(languages);
