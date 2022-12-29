// gallery.js

class Model {
  constructor() {
    this.api = {
      addComment: '/comments/new',
      comments: '/comments',
      favorites: '/photos/favorite',
      likes: '/photos/like',
      photos: '/photos',
    };

    this.photos = [];
    this.currentPhoto = null;
  }

  async setPhotos() {
    const response = await fetch(this.api.photos);
    this.photos = await response.json();
    this.currentPhoto = this.photos[0];
  }

  async getComments() {
    const query = `?photo_id=${this.currentPhoto.id}`;
    const response = await fetch(this.api.comments + query);
    return response.json();
  }

  changePhoto(direction) {
    let currIdx = this.photos.indexOf(this.currentPhoto);

    if (direction === 'right') {
      const nextPhoto = this.photos[currIdx + 1];
      this.currentPhoto = nextPhoto || this.photos[0];
    } else if (direction === 'left') {
      const nextPhoto = this.photos[currIdx - 1];
      this.currentPhoto = nextPhoto || this.photos.at(-1);
    }
  }

  async addMetric(type) {
    const response = await fetch(this.api[type], {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `photo_id=${this.currentPhoto.id}`,
    });

    const info = await response.json();
    this.currentPhoto[type] = info.total;
  }

  addComment(body) {
    return fetch(this.api.addComment, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body,
    });
  }
}

class View {
  constructor() {
    this.elms = {
      addComment: document.querySelector('.add-comment'),
      comments: document.querySelector('#comments ul'),
      favBtn: document.querySelector('.favorite'),
      likeBtn: document.querySelector('.like'),
      photoInfo: document.querySelector('#photo-info'),
      slideNext: document.querySelector('.next'),
      slidePrev: document.querySelector('.prev'),
      slides: document.querySelector('#slides'),
    };

    this.temps = {};
    this.setTemplates();
  }

  setTemplates() {
    const temps = document.querySelectorAll('[type$="handlebars"]');
    [...temps].forEach(({ dataset, text }) => {
      const name = dataset.name;
      this.temps[name] = Handlebars.compile(text);
      if (dataset.type === 'partial') Handlebars.registerPartial(name, text);
    });
  }

  renderPhoto(photo) {
    const html = this.temps.photo(photo);
    this.elms.slides.insertAdjacentHTML('beforeend', html);
    this.transitionPhotos();
    this.renderPhotoInfo(photo);
  }

  transitionPhotos() {
    const photo1 = this.elms.slides.children[0];
    const photo2 = this.elms.slides.children[1];

    setTimeout(() => {
      if (photo2) {
        photo1.classList.remove('visible');
        photo2.classList.add('visible');
        setTimeout(() => photo1.remove(), 400);
      } else {
        photo1.classList.add('visible');
      }
    }, 0);
  }

  renderPhotoInfo(photo) {
    this.elms.photoInfo.innerHTML = this.temps.photoInfo(photo);
  }

  renderComments(comments) {
    this.elms.comments.innerHTML = this.temps.comments(comments);
  }
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.bind();
    this.init();
  }

  bind() {
    const slideNext = this.view.elms.slideNext;
    slideNext.addEventListener('click', (e) => this.handleSlideNext(e));

    const slidePrev = this.view.elms.slidePrev;
    slidePrev.addEventListener('click', (e) => this.handleSlidePrev(e));

    const photoInfo = this.view.elms.photoInfo;
    photoInfo.addEventListener('click', (e) => this.handleAddMetric(e));

    const addComment = this.view.elms.addComment;
    addComment.addEventListener('submit', (e) => this.handleAddComment(e));
  }

  handleSlideNext(e) {
    e.preventDefault();

    this.model.changePhoto('right');
    this.renderPhoto();
    this.renderComments();
  }

  handleSlidePrev(e) {
    e.preventDefault();

    this.model.changePhoto('left');
    this.renderPhoto();
    this.renderComments();
  }

  async handleAddMetric(e) {
    e.preventDefault();

    const metric = e.target.dataset.property;
    if (!metric) return;
    await this.model.addMetric(metric);
    this.view.renderPhotoInfo(this.model.currentPhoto);
  }

  async handleAddComment(e) {
    const form = e.target;
    e.preventDefault();

    const json = this.commentFormJson(new FormData(form));
    await this.model.addComment(json);
    this.renderComments();
    form.reset();
  }

  commentFormJson(formData) {
    const params = {};

    for (const [key, val] of formData.entries()) {
      params[key] = val;
    }

    return JSON.stringify(params);
  }

  renderPhoto() {
    this.view.renderPhoto(this.model.currentPhoto);
  }

  async renderComments() {
    this.view.renderComments(await this.model.getComments());
  }

  async init() {
    await this.model.setPhotos();
    this.renderPhoto();
    this.renderComments();
  }
}

const model = new Model();
const view = new View();
const controller = new Controller(model, view);
