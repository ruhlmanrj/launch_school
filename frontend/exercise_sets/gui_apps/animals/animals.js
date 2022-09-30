/**
 * Shows a tooltip if the user hovers their mouse on an image for over
 * 2 seconds. If it is displayed, it is hidden when their mouse leaves
 * the image.
 */

const tooltips = {
  init() {
    this.animals = document.querySelector('#animals');
    this.tooltipTimer = null;
    this.bind();
  },

  bind() {
    this.animals.addEventListener('mouseover', this.handleImgOver.bind(this));
    this.animals.addEventListener('mouseout', this.handleImgOut.bind(this));
  },

  handleImgOver(e) {
    if (e.target.tagName !== 'IMG') { return; }

    this.tooltipTimer = setTimeout(() => {
      this.showTooltip(e.target.nextElementSibling);
    }, 2000);
  },

  handleImgOut(e) {
    if (e.target.tagName !== 'IMG') { return; }

    clearTimeout(this.tooltipTimer);
    this.hideTooltip(e.target.nextElementSibling);
  },

  showTooltip({ style }) {
    style.opacity = '100%';
    style.visibility = 'visible';
  },

  hideTooltip({ style }) {
    style.opacity = '0';
    style.visibility = 'hidden';
  }
};

tooltips.init();
