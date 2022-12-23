/**
 * In response to a submit event, obtains form parameters
 * and uses them to create a list item, which is displayed.
 */

class GroceryList {
  constructor() {
    this.elms = {
      $clearBtn: $('.reset-app'),
      $form: $('form'),
      $itemName: $('input[name="name"]'),
      $itemQuantity: $('input[name="quantity"]'),
      $list: $('.grocery-list ul'),
    };

    this.temps = {
      items: Handlebars.compile($('#item-template').text()),
    };

    this.items = [];

    this.bindHandlers();
    this.setup();
  }

  bindHandlers() {
    this.elms.$form.submit(this.handleSubmit.bind(this));
    this.elms.$clearBtn.click(() => this.setup());
  }

  handleSubmit(e) {
    e.preventDefault();

    const item = {
      name: this.elms.$itemName.val(),
      quantity: this.elms.$itemQuantity.val() || 1,
    };
    this.items.push(item);

    this.elms.$form[0].reset();
    this.renderList();
  }

  renderList() {
    const html = this.temps.items(this.items);
    this.elms.$list.html(html);
  }

  setup() {
    this.elms.$form[0].reset();
    this.items = [];
    this.renderList();
  }
}

const list = new GroceryList();
