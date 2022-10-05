/**
 * Allows filtering of cars using a form with a set of controls for specifying
 * the criteria to match.
 */

Utils = {
  unique(arr) {
    return [...new Set(arr)];
  }
};

const App = {
  init(cars) {
    this.cars = cars;
    this.makeModels = this.createMakeModelsMap();
    this.carList = document.querySelector('ul');
    this.templates = {};
    this.cacheTemplates();
    this.renderForm();
    this.form = document.querySelector('form');
    this.selectMake = document.querySelector('[name="make"]');
    this.selectModel = document.querySelector('[name="model"]');
    this.renderCars(cars);
    this.bind();
  },

  createMakeModelsMap() {
    const map = {};
    map['all'] = [];

    this.cars.forEach(({ make, model }) => {
      map[make] ||= [];
      if (!map[make].includes(model)) {
        map[make].push(model);
      }

      if (!map['all'].includes(model)) {
        map['all'].push(model);
      }
    });

    return map;
  },

  bind() {
    this.form.addEventListener('submit', this.filterCars.bind(this));
    this.selectMake.addEventListener('change', this.updateModels.bind(this));
  },

  updateModels({ target }) {
    const make = target.value;
    const models = this.makeModels[make];
    const options = models.map(this.categoryValueContext);

    if (make === 'all') {
      options.unshift(this.categoryValueContext(make));
    }

    this.selectModel.innerHTML = this.templates.options({ options });
  },

  filterCars(e) {
    e.preventDefault();

    const formEntries = [...new FormData(this.form).entries()];
    const filtered = this.cars.filter(car => this.meetsFormCriteria(car, formEntries));
    this.renderCars(filtered);
  },

  meetsFormCriteria(car, formEntries) {
    const matches = ([key, val]) => String(car[key]) === val || val === 'all';
    return formEntries.every(matches);
  },


  renderForm() {
    const categoryNames = Object.keys(this.cars[0]).filter(key => key !== 'image');
    const categories = categoryNames.map(this.categoryContext, this);
    document.body.insertAdjacentHTML('afterbegin', this.templates.form({ categories }));
  },

  renderCars(cars) {
    const html = this.templates.cars({ cars }).trim();
    if (html) {
      this.carList.innerHTML = html;
    } else {
      this.carList.innerHTML = '<h3>No matching cars were found.<h3>';
    }
  },

  cacheTemplates() {
    const templates = document.querySelectorAll('[type="text/x-handlebars"]');

    templates.forEach(({ dataset, textContent }) => {
      if (dataset.type.includes('complete')) {
        this.templates[dataset.id] = Handlebars.compile(textContent);
      }

      if (dataset.type.includes('partial')) {
        Handlebars.registerPartial(dataset.id, textContent);
      }
    });
  },

  categoryContext(name) {
    const carValues = this.cars.map(car => car[name]);

    return {
      nameAttr: name,
      nameTitle: name[0].toUpperCase() + name.slice(1),
      values: Utils.unique(carValues).map(this.categoryValueContext),
    }
  },

  uniqueCarValues(name) {
    const values = this.cars.map(car => car[name]);
    return [...new Set(values)];
  },

  categoryValueContext(value) {
    value = String(value);

    return {
      nameAttr: value,
      nameTitle: value[0].toUpperCase() + value.slice(1),
    };
  }
}

const cars = [
  { make: 'Honda', image: 'images/honda-accord-2005.jpg', model: 'Accord', year: 2005, price: 7000 },
  { make: 'Honda', image: 'images/honda-accord-2008.jpg', model: 'Accord', year: 2008, price: 11000 },
  { make: 'Toyota', image: 'images/toyota-camry-2009.jpg', model: 'Camry', year: 2009, price: 12500 },
  { make: 'Toyota', image: 'images/toyota-corrolla-2016.jpg', model: 'Corolla', year: 2016, price: 15000 },
  { make: 'Suzuki', image: 'images/suzuki-swift-2014.jpg', model: 'Swift', year: 2014, price: 9000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 25000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 26000 },
];

App.init(cars);