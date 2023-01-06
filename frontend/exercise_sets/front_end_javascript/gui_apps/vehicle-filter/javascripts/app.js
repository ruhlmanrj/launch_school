// An app for filtering a collection of cars based on 4 properties

const Utils = {
  numberify(value) {
    const reversed = [...String(value)].reverse().join('');
    const commasAdded = reversed.replace(/\d{3}/g, match => `${match},`);
    return [...commasAdded].reverse().join('');
  },
};

class Vehicles {
  constructor(list) {
    this.list = list;
    const properties = Object.keys(list[0]);
    this.properties = properties.filter(prop => prop !== 'image');
  }

  propertyValues(property) {
    const values = this.list.map(vehicle => vehicle[property]);
    return [...new Set(values)];
  }

  listBy(criteria) {
    if (Object.keys(criteria).length === 0) return this.list;
    return this.list.filter(vehicle => this.meetsCriteria(criteria, vehicle));
  }

  meetsCriteria(criteria, vehicle) {
    for (const criterion in criteria) {
      if (criteria[criterion] !== String(vehicle[criterion])) return false;
    }

    return true;
  }
}

class FilterView {
  constructor() {
    this.elms = {
      filters: document.querySelector('.filters'),
      form: document.querySelector('form'),
      status: document.querySelector('.status-msg'),
      vehicles: document.querySelector('.vehicles'),
    };

    this.temps = {};
    this.setUpTemplates();
  }

  setUpTemplates() {
    const filtersText = document.querySelector('#filters-template').text;
    const vehiclesText = document.querySelector('#vehicles-template').text;
    this.temps.filters = Handlebars.compile(filtersText);
    this.temps.vehicles = Handlebars.compile(vehiclesText);

    Handlebars.registerHelper('price', function (value) {
      if (this.name === 'price') value = Utils.numberify(value);
      return value;
    });
  }
  
  renderFilters(filters) {
    this.elms.filters.innerHTML = this.temps.filters(filters);
  }

  renderVehicles(vehicles, properties) {
    if (vehicles.length === 0) {
      this.setStatusMessage('There are no vehicles matching that criteria');
      return;
    }

    vehicles.forEach(vehicle => this.addProperties(vehicle, properties));
    this.elms.vehicles.innerHTML = this.temps.vehicles(vehicles);
  }

  addProperties(vehicle, properties) {
    const vehicleProperties = properties.map(property => {
      return { name: property, value: vehicle[property] };
    });

    vehicle.properties = vehicleProperties;
  }

  setStatusMessage(message) {
    this.elms.vehicles.innerHTML = `<p class="status-msg">${message}</p>`;
  }
}

class FilterApp {
  constructor(vehicles, view) {
    this.vehicles = vehicles;
    this.view = view;

    this.bindHandlers();
    this.view.renderFilters(this.getFilters());
  }

  bindHandlers() {
    const form = this.view.elms.form;
    form.addEventListener('submit', e => this.handleSubmitFilters(e));
  }

  handleSubmitFilters(e) {
    e.preventDefault();

    const criteria = this.extractFilterParams(e.target);

    const vehicles = this.vehicles.listBy(criteria);
    this.view.renderVehicles(vehicles, this.vehicles.properties);
  }

  extractFilterParams(form) {
    const params = {};

    for (const { name, value } of form) {
      if (name && value !== 'Any') params[name] = value;
    }

    return params;
  }

  getFilters() {
    return this.vehicles.properties.map(property => {
      return {
        property,
        options: this.vehicles.propertyValues(property),
      };
    });
  }
}

const list = [
  {
    make: 'Honda',
    image: 'images/honda-accord-2005.jpg',
    model: 'Accord',
    year: 2005,
    price: 7000,
  },
  {
    make: 'Honda',
    image: 'images/honda-accord-2008.jpg',
    model: 'Accord',
    year: 2008,
    price: 11000,
  },
  {
    make: 'Toyota',
    image: 'images/toyota-camry-2009.jpg',
    model: 'Camry',
    year: 2009,
    price: 12500,
  },
  {
    make: 'Toyota',
    image: 'images/toyota-corrolla-2016.jpg',
    model: 'Corolla',
    year: 2016,
    price: 15000,
  },
  {
    make: 'Suzuki',
    image: 'images/suzuki-swift-2014.jpg',
    model: 'Swift',
    year: 2014,
    price: 9000,
  },
  {
    make: 'Audi',
    image: 'images/audi-a4-2013.jpg',
    model: 'A4',
    year: 2013,
    price: 25000,
  },
  {
    make: 'Audi',
    image: 'images/audi-a4-2013.jpg',
    model: 'A4',
    year: 2013,
    price: 26000,
  },
];

new FilterApp(new Vehicles(list), new FilterView());
