// app.js

class ModalApp {
  constructor($wrap) {
    this.elms = {
      $wrap,
      $modals: $wrap.find('.modal'),
      $overlay: $wrap.find('.overlay'),
    };

    this.$openModal = null;

    this.bindHandlers();
  }

  bindHandlers() {
    this.elms.$wrap.on('click', 'a, a img', (e) => this.handleOpenModal(e));
    this.elms.$wrap.on('click', '.close-modal', () => this.hideModal());
    this.elms.$overlay.click(() => this.hideModal());
    $(document).keydown((e) => {
      if (e.key === 'Escape') this.hideModal();
    });
  }

  handleOpenModal(e) {
    e.preventDefault();

    const person = $(e.target).closest('a').data('person');
    const isMatch = (_, modal) => $(modal).data('person') === person;
    const $modal = this.elms.$modals.filter(isMatch);

    this.showModal($modal);
    this.$openModal = $modal;
  }

  showModal($modal) {
    this.slideModal($modal);
    this.elms.$overlay.fadeIn();
  }

  hideModal() {
    this.slideModal(this.$openModal, false);
    this.elms.$overlay.fadeOut();
  }

  slideModal($modal, slideIn = true) {
    if (slideIn) {
      $modal.animate({ left: '50%' });
    } else {
      $modal.animate({ left: '-100%' });
    }
  }
}

const app = new ModalApp($('.team'));
