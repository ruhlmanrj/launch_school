// An app for filtering a collection of cars based on 4 criteria

const Utils = {
  pricify(value) {
    const reversed = [...String(value)].reverse().join('');
    const commasAdded = reversed.replace(/\d{3}/g, match => `${match},`);
    return '$' + [...commasAdded].reverse().join('');
  },
  unique(array) {
    return [...new Set(array)];
  },
};

class Vehicles {
  constructor(list) {
    this.list = list;
    const criteria = Object.keys(list[0]);
    this.criteria = criteria.filter(name => name !== 'image');
  }

  criterionValues(name) {
    const values = this.list.map(vehicle => vehicle[name]);
    return Utils.unique(values);
  }

  assocCriterionVals(refCriterion, assocCriterionName) {
    const vals = [];

    this.list.forEach(vehicle => {
      const vehicleValue = String(vehicle[refCriterion.name]);
      if (vehicleValue === refCriterion.value) {
        vals.push(vehicle[assocCriterionName]);
      }
    });

    return Utils.unique(vals);
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
      reset: document.querySelector('.reset'),
      status: document.querySelector('.status-msg'),
      vehicles: document.querySelector('.vehicles'),
    };

    this.temps = {};
    this.setUpTemplates();
  }

  setUpTemplates() {
    const templates = document.querySelectorAll('[type^="template"]');
    templates.forEach(({ dataset, text }) => {
      this.temps[dataset.name] = Handlebars.compile(text);
      if (dataset.isPartial) Handlebars.registerPartial(dataset.name, text);
    });

    Handlebars.registerHelper('price', function (value, name) {
      if (name === 'price') value = Utils.pricify(value);
      return value;
    });
  }

  renderFilters(filters) {
    this.elms.filters.innerHTML = this.temps.filters(filters);
  }

  renderFilterOptions(filters, criteria) {
    filters.forEach(filter => {
      const options = criteria[filter.name];
      filter.innerHTML = this.temps.options({ name: filter.name, options });
    });
  }

  renderVehicles(vehicles, criteria) {
    vehicles.forEach(vehicle => this.addCriteria(vehicle, criteria));
    this.elms.vehicles.innerHTML = this.temps.vehicles(vehicles);
  }

  addCriteria(vehicle, criteria) {
    const vehicleCriteria = criteria.map(criteria => {
      return { name: criteria, value: vehicle[criteria] };
    });

    vehicle.criteria = vehicleCriteria;
  }
}

class FilterApp {
  constructor(vehicles, view) {
    this.vehicles = vehicles;
    this.view = view;

    this.bindHandlers();
    this.view.renderFilters(this.getFilters());
    this.view.renderVehicles(this.vehicles.list, this.vehicles.criteria);
  }

  bindHandlers() {
    const form = this.view.elms.form;
    form.addEventListener('submit', e => this.handleSubmitFilters(e));

    const filters = this.view.elms.filters;
    filters.addEventListener('change', e => this.handleFilterChange(e));

    const reset = this.view.elms.reset;
    reset.addEventListener('click', () => this.handleResetFilters());
  }

  handleFilterChange(e) {
    const filter = e.target;
    this.clearUndesiredOptions(filter);

    const referenceCriterion = { name: filter.name, value: filter.value };
    const filtersToUpdate = this.getUnchangedFilters();
    const criteria = filtersToUpdate.map(({ name }) => name);

    const associatedCriteria = this.getAssociatedCriteria(
      referenceCriterion,
      criteria
    );

    this.view.renderFilterOptions(filtersToUpdate, associatedCriteria);
  }

  handleSubmitFilters(e) {
    e.preventDefault();

    const criteria = this.extractFilterParams(e.target);

    const vehicles = this.vehicles.listBy(criteria);
    this.view.renderVehicles(vehicles, this.vehicles.criteria);
  }

  handleResetFilters() {
    this.view.renderFilters(this.getFilters());
    this.view.renderVehicles(this.vehicles.list, this.vehicles.criteria);
  }

  clearUndesiredOptions(select) {
    const options = [...select.options];
    const keep = options.find(({ value }) => value === select.value);

    select.innerHTML = '';
    select.appendChild(keep);
  }

  getUnchangedFilters() {
    const filters = [...this.view.elms.filters.querySelectorAll('select')];
    return filters.filter(({ value }) => value === 'Any');
  }

  getAssociatedCriteria(refCriterion, assocCriteriaNames) {
    const criteria = {};

    assocCriteriaNames.forEach(name => {
      criteria[name] = this.vehicles.assocCriterionVals(refCriterion, name);
    });

    return criteria;
  }

  extractFilterParams(form) {
    const params = {};

    for (const { name, value } of form) {
      if (name && value !== 'Any') params[name] = value;
    }

    return params;
  }

  getFilters() {
    return this.vehicles.criteria.map(name => {
      return {
        name,
        options: this.vehicles.criterionValues(name),
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
