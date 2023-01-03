// app.js

class App {
  constructor() {
    this.elms = {
      imgList: document.querySelector('ul'),
    };

    this.tooltip = null;
    this.tooltipTimer = null;

    this.enableTransitionsOnLoad();
    this.bindHandlers();
  }

  bindHandlers() {
    const handleMouseOverImg = (e) => this.handleMouseOverImg(e);
    this.elms.imgList.addEventListener('mouseover', handleMouseOverImg);

    const handleMouseOutImg = (e) => this.handleMouseOutImg(e);
    this.elms.imgList.addEventListener('mouseout', handleMouseOutImg);
  }

  handleMouseOverImg(e) {
    if (e.target.tagName !== 'IMG') return;

    this.tooltip = e.target.nextElementSibling;
    this.tooltipTimer = this.fadeInTooltip(2000);
  }

  handleMouseOutImg(e) {
    if (e.target.tagName !== 'IMG') return;

    clearTimeout(this.tooltipTimer);
    this.fadeOutTooltip();
  }

  fadeInTooltip(delay) {
    return setTimeout(() => this.tooltip.classList.add('visible'), delay);
  }

  fadeOutTooltip() {
    this.tooltip.classList.remove('visible');
  }

  enableTransitionsOnLoad() {
    window.onload = () => document.body.classList.remove('preload');
  }
}

new App();
