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
      $context: $('.context-menu'),
      $overlay: $('.overlay'),
      $prompt: $('.popup-confirm'),
      $todos: $('.todos'),
    };

    this.temps = {
      todos: Handlebars.compile($('#todos-template').text()),
    };
  }

  renderTodos(todos) {
    this.elms.$todos.html(this.temps.todos(todos));
  }

  showConfirmPrompt(id) {
    this.elms.$prompt.attr('data-id', id);
    setTimeout(() => {
      this.elms.$prompt.fadeIn(100);
      this.elms.$overlay.fadeIn(100);
    }, 0);
  }

  hideConfirmPrompt() {
    this.elms.$prompt.fadeOut(100);
    this.elms.$overlay.fadeOut(100);
  }

  showContextMenu(id, coords) {
    const css = { left: coords.x, top: coords.y };
    this.elms.$context.attr('data-id', id).css(css).fadeIn(100);
  }

  hideContextMenu() {
    const $context = this.elms.$context;
    if ($context.css('display') !== 'none') $context.fadeOut(100);
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
    const $todos = this.view.elms.$todos;
    $todos.on('contextmenu', e => this.handleShowContextMenu(e));

    const $context = this.view.elms.$context;
    $context.on('click', 'li', e => this.handleContextMenuClick(e));
    $(document).on('click', e => this.handleDocumentClick(e));

    const $prompt = this.view.elms.$prompt;
    $prompt.on('click', 'button', e => this.handleConfirmDelete(e));
    this.view.elms.$overlay.click(() => this.view.hideConfirmPrompt());
  }

  handleConfirmDelete(e) {
    if ($(e.target).hasClass('delete')) {
      const id = $(e.delegateTarget).attr('data-id');
      this.model.delete(id);
      this.view.renderTodos(this.model.list);
    }

    this.view.hideConfirmPrompt();
  }

  handleShowContextMenu(e) {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      const id = $(e.target).attr('data-id');
      this.view.showContextMenu(id, { x: e.clientX, y: e.clientY });
    }
  }

  handleContextMenuClick(e) {
    if ($(e.target).text() === 'Delete Todo') {
      this.view.hideContextMenu();
      const id = this.view.elms.$context.attr('data-id');
      this.view.showConfirmPrompt(id);
    }
  }

  handleDocumentClick(e) {
    const isNotContextMenu = e.target !== this.view.elms.$context[0];
    if (isNotContextMenu) this.view.hideContextMenu();
  }
}

const todoList = [
  { id: 1, title: 'Homework' },
  { id: 2, title: 'Shopping' },
  { id: 3, title: 'Calling Mom' },
  { id: 4, title: 'Coffee with John ' },
];

const todos = new Todos(todoList);
new TodosApp(todos, new TodosView());
