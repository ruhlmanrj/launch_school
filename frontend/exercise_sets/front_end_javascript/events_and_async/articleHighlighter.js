// Highlights various elements (surrounds them with a border) in response to
// their being clicked upon.

const highlightElements = document.getElementsByClassName('highlight');

function clearHighlights() {
  const removeHighlight = element => element.classList.remove('highlight');
  [...highlightElements].forEach(removeHighlight)
}

const navLinks = document.querySelector('header ul');
const articles = [...document.getElementsByTagName('article')];
const mainElement = document.querySelector('main');

navLinks.onclick = event => {
  event.stopPropagation();
  clearHighlights();

  const articleId = event.target.getAttribute('href');
  const article = document.querySelector(articleId);
  article.classList.add('highlight');
};

articles.forEach(article => {
  article.onclick = (event) => {
    event.stopPropagation();
    clearHighlights();
    event.currentTarget.classList.add('highlight');
  };
});

mainElement.onclick = ({ currentTarget }) => {
  clearHighlights();
  currentTarget.classList.add('highlight');
}
