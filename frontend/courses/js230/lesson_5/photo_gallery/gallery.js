/**
 * Facilitates changing of the main image to a thumbnail after the thumbnail
 * is clicked. Features fading in and out.
 */

HTMLImageElement.prototype.populateWith = function({ src, alt, title }) {
  this.src = src;
  this.alt = alt;
  this.title = title;
}

function showNewImage(mainImage, thumbnail) {
  setTimeout(() => {
    mainImage.populateWith(thumbnail)
    mainImage.classList.remove('hide');
  }, 300);
}

const imgMain = document.querySelector('figure img');
let imgActive = document.querySelector('ul img');

document.querySelector('ul').addEventListener('click', ({ target }) => {
  if (target.tagName !== 'IMG') { return; }

  imgActive.classList.remove('active');
  target.classList.add('active');
  imgActive = target;

  imgMain.classList.add('hide');
  showNewImage(imgMain, target);
});
