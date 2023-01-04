// app.js

class Todos {
  constructor(todos) {
    this.list = todos;
  }

  delete(id) {
    this.list = this.list.filter(todo => todo.id !== Number(id));
  }
}

class TodosView {
  constructor() {
    this.elms = {
      $overlay: $('.overlay'),
      $popup: $('.popup-confirm'),
      $todos: $('ul'),
    };

    this.temps = {
      todos: Handlebars.compile($('#todos-template').text()),
    };
  }

  renderTodos(todos) {
    this.elms.$todos.html(this.temps.todos(todos));
  }

  showConfirmPrompt(id) {
    this.elms.$popup.find('.delete').attr('data-id', id);
    setTimeout(() => {
      this.elms.$popup.fadeIn(100);
      this.elms.$overlay.fadeIn(100);
    }, 0);
  }

  hideConfirmPrompt() {
    this.elms.$popup.fadeOut(100);
    this.elms.$overlay.fadeOut(100);
  }
}


class TodosApp {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.renderTodos(this.model.list);
    this.bindHandlers();
  }

  bindHandlers() {
    this.view.elms.$todos.click(e => this.handleFirstDelete(e));
    this.view.elms.$popup.click(e => this.handleSecondDelete(e));
    this.view.elms.$overlay.click(() => this.view.hideConfirmPrompt());
  }

  handleFirstDelete(e) {
    const id = $(e.target).attr('data-id');
    if (id) this.view.showConfirmPrompt(id);
  }

  handleSecondDelete(e) {
    const id = $(e.target).attr('data-id');
    if (id) {
      this.model.delete(id);
      this.view.renderTodos(this.model.list);
    }

    this.view.hideConfirmPrompt();
  }
}

todoList = [
  { id: 1, title: 'Homework' },
  { id: 2, title: 'Shopping' },
  { id: 3, title: 'Calling Mom' },
  { id: 4, title: 'Coffee with John ' },
];

const todos = new Todos(todoList);
const app = new TodosApp(todos, new TodosView());
