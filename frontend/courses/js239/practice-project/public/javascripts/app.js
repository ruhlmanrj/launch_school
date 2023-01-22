/**
 *  Contact Manager App
 *
 *  ===== Features
 *  - Add contacts
 *  - Update contacts
 *  - Delete contacts
 *  - Add tags to contacts
 *  - Filter contacts by tag
 *  - Filter contacts based on search string
 *
 */

class ContactManagerView {
  constructor() {
    this.elms = {
      $form: $('.contact-form'),
      $cancelFormBtn: $('.cancel-btn'),
      $contacts: $('.contacts'),
      $createTagBtn: $('.create-tag-btn'),
      $createTagInput: $('#create-tag'),
      $filter: $('.search input'),
      $formTags: $('.form-tags'),
      $noContactsMsg: $('.no-contacts'),
      $noneMatchingMsg: $('.no-matching-contacts'),
      $overlay: $('.overlay'),
    };

    this.temps = {};
    this.registerHelpers();
    this.setTemplates();
  }

  registerHelpers() {
    Handlebars.registerHelper('isLastTag', function (tags) {
      return tags.at(-1) === this;
    });
  }

  setTemplates() {
    $('[type^="template"').each((_, temp) => {
      const name = $(temp).attr('data-name');
      const type = $(temp).attr('data-type');
      const code = $(temp).text();

      if (type === 'partial') {
        Handlebars.registerPartial(name, code);
      }

      this.temps[name] = Handlebars.compile(code);
    });
  }

  renderContacts(contacts) {
    this.elms.$contacts.html(this.temps.contacts({ contacts }));
  }

  renderTagOptions(tags) {
    let html;
    if (tags.length === 0) {
      html = '<option disabled>Create a tag to attach.</option>';
    } else {
      html = this.temps.formTags({ tags });
    }
    this.temps.formTags({ tags });
    this.elms.$formTags.html(html);
  }

  renderTagBeforeIdx(tag, idx) {
    this.elms.$formTags.find(':disabled').remove();

    const tagHtml = this.temps.formTag({ tag });
    if (idx === undefined) {
      this.elms.$formTags.append(tagHtml);
    } else {
      this.elms.$formTags.children().eq(idx).before(tagHtml);
    }
  }

  showNoContactsMsg() {
    this.elms.$noContactsMsg.show();
  }

  hideNoContactsMsg() {
    this.elms.$noContactsMsg.hide();
  }

  showNoneMatchingMsg(term) {
    this.elms.$noneMatchingMsg.show().find('.term').text(term);
  }

  hideNoneMatchingMsg() {
    this.elms.$noneMatchingMsg.hide();
  }

  showAddContactForm() {
    const $form = this.elms.$form;
    if ($form[0].style.height === '') {
      $form.find('.form-type').text('Add');
      this.showFormAndOverlay($form);
    }
  }

  showUpdateContactForm($contact) {
    const $form = this.elms.$form;
    if ($form[0].style.height === '') {
      $form.find('.form-type').text('Update');
      $form.find('#id').val($contact.attr('data-id'));
      this.showFormAndOverlay($form);
      this.populateContactInfo($form, $contact);
    }
  }

  populateContactInfo($form, $contact) {
    $form.find('#full_name').val($contact.find('.name').text());
    $form.find('#email').val($contact.find('.email').text());
    $form.find('#phone_number').val($contact.find('.phone').text());

    const tags = $.map($contact.find('.tags a'), link => $(link).text());
    const selectOption = (_, option) => {
      if (tags.includes($(option).text())) option.selected = true;
    };
    $form.find('option').each(selectOption);
  }

  showFormAndOverlay($form) {
    const fullHeight = $form.css('height', 'auto').height();
    $form.css('height', '0');

    const processTransitions = () => {
      setTimeout(() => {
        $form.css('height', fullHeight);
        this.showOverlay();
        setTimeout(() => $form.css('height', 'auto'), 1000);
      });
    };

    requestAnimationFrame(processTransitions);
  }

  hideContactForm() {
    const $form = this.elms.$form;

    if ($form[0].style.height !== 'auto') return;
    this.resetForm();

    $form.css('height', $form.height());
    setTimeout(() => {
      $form.css('height', '');
      this.hideOverlay();
    });
  }

  resetForm() {
    const $form = this.elms.$form;
    $form.find('input').each((_, input) => $(input).val(''));
    $form.find('li').removeClass('error');
    $form.find('p').text('');
  }

  showOverlay() {
    this.elms.$overlay.addClass('visible');
  }

  hideOverlay() {
    this.elms.$overlay.removeClass('visible');
  }

  enableFilter() {
    this.elms.$filter.attr('disabled', false);
  }

  disableFilter() {
    this.elms.$filter.attr('disabled', true);
  }

  filterContacts(predicateFxn) {
    this.elms.$contacts.find('li').each((_, contact) => {
      if (predicateFxn($(contact))) {
        $(contact).show();
      } else {
        $(contact).hide();
      }
    });
  }
}

class ContactManagerController {
  constructor(view) {
    this.view = view;
    this.handleShowContacts();
    this.bindHandlers();
  }

  async handleShowContacts() {
    const contacts = await this.getContacts();
    if (contacts.length > 0) {
      this.processTags(contacts);
      this.view.hideNoContactsMsg();
      this.view.renderContacts(contacts);
      this.view.enableFilter();
    } else {
      this.view.elms.$contacts.html('');
      this.view.showNoContactsMsg();
      this.view.disableFilter();
    }
  }

  async getContacts() {
    const response = await fetch('http://localhost:3000/api/contacts');
    return response.json();
  }

  processTags(contacts) {
    contacts.forEach(contact => {
      if (contact.tags) {
        contact.tags = contact.tags.split(',').sort();
      } else {
        contact.tags = [];
      }
    });
  }

  bindHandlers() {
    this.bindFormHandlers();

    const searchFilterHandler = e => this.handleSearchFilterContacts(e);
    this.view.elms.$filter.on('input', e => searchFilterHandler(e));

    const tagFilterHandler = e => this.handleTagFilterContacts(e);
    this.view.elms.$contacts.on('click', 'a', tagFilterHandler);

    const deleteHandler = e => this.handleDeleteContact(e);
    this.view.elms.$contacts.on('click', '.delete-btn', deleteHandler);

    this.view.elms.$overlay.click(() => this.view.hideContactForm());
  }

  bindFormHandlers() {
    const addHandler = () => this.handleShowAddContactForm();
    $('main').on('click', '.add-btn', addHandler);

    const $contacts = this.view.elms.$contacts;
    const updateHandler = e => this.handleShowUpdateContactForm(e);
    $contacts.on('click', '.edit-btn', updateHandler);

    this.view.elms.$form.submit(e => this.handleModifyContact(e));

    this.view.elms.$cancelFormBtn.click(() => this.view.hideContactForm());
    this.view.elms.$createTagBtn.click(e => this.handleCreateTag(e));
  }

  async handleShowAddContactForm() {
    const contacts = await this.getContacts();

    if (contacts.length > 0) {
      const tags = this.tagsFromContacts(contacts).sort();
      this.view.renderTagOptions(tags);
    }

    this.view.showAddContactForm();
  }

  async handleShowUpdateContactForm(e) {
    const contacts = await this.getContacts();

    const tags = this.tagsFromContacts(contacts).sort();
    this.view.renderTagOptions(tags);

    this.view.showUpdateContactForm($(e.target).closest('li'));
  }

  tagsFromContacts(contacts) {
    const allTags = [];

    contacts.forEach(({ tags }) => {
      if (tags) allTags.push(...tags.split(','));
    });

    return [...new Set(allTags)];
  }

  async handleModifyContact(e) {
    e.preventDefault();

    const $form = $(e.target);
    if (!this.validateForm($form)) return;

    await this.modifyContact($form);

    this.handleShowContacts();
    this.view.hideContactForm();
  }

  validateForm($form) {
    $form.find('li').removeClass('error');
    $form.find('p').text('');
    let isValid = true;

    $form.find('input').each((_, input) => {
      if (input.checkValidity()) return;
      isValid = false;

      const $wrapper = $(input).closest('li');
      $wrapper.addClass('error');

      const fieldType = $wrapper.find('label').text().slice(0, -1);
      this.setFieldErrorMessage(fieldType, $wrapper.find('p'), $(input).val());
    });

    return isValid;
  }

  setFieldErrorMessage(type, $message, value) {
    if (type === 'Email address') {
      $message.text(
        value ? `Please enter a valid email address` : `${type} is required`
      );
    } else {
      $message.text(`${type} is required`);
    }
  }

  async modifyContact($form) {
    const type = $form.find('.form-type').text();

    const data = new FormData($form[0]);
    data.set('tags', data.getAll('tags').join(','));

    if (type === 'Add') {
      await this.addContact(data);
    } else {
      await this.updateContact(data);
    }
  }

  async addContact(data) {
    await fetch('http://localhost:3000/api/contacts/', {
      method: 'POST',
      body: new URLSearchParams(data),
    });
  }

  async updateContact(data) {
    console.log(data);
    await fetch(`http://localhost:3000/api/contacts/${data.get('id')}`, {
      method: 'PUT',
      body: new URLSearchParams(data),
    });
  }

  async handleDeleteContact(e) {
    const $wrapper = $(e.target).closest('li');

    const name = $wrapper.find('.name').text();
    const message = `Are you sure you want to delete '${name}?'`;
    if (!confirm(message)) return;

    const id = $wrapper.attr('data-id');
    await this.deleteContact(id);

    this.handleShowContacts();
  }

  async deleteContact(id) {
    await fetch(`http://localhost:3000/api/contacts/${id}`, {
      method: 'DELETE',
    });
  }

  handleCreateTag(e) {
    const $input = this.view.elms.$createTagInput;
    const $errorMsg = $(e.target).prev();

    const tag = $input.val();
    if (!tag) {
      $input.closest('li').addClass('error');
      $errorMsg.text('New tags cannot be empty');
    } else {
      $input.val('').closest('li').removeClass('error');
      $errorMsg.text('');

      this.addTagToTags(tag);
    }
  }

  addTagToTags(tag) {
    const $options = this.view.elms.$formTags.find('option:not(":disabled")');
    const tags = $.map($options, opt => $(opt).val());
    if (tags.includes(tag)) return;

    const idx = this.beforeIndexForTag(tag, tags);
    this.view.renderTagBeforeIdx(tag, idx);
  }

  beforeIndexForTag(newTag, tags) {
    for (const idx in tags) {
      if (tags[idx].toLowerCase() > newTag.toLowerCase()) {
        return Number(idx);
      }
    }

    return undefined;
  }

  handleSearchFilterContacts(e) {
    this.view.hideNoneMatchingMsg();
    const term = $(e.target).val();

    this.view.filterContacts($contact => {
      const name = $contact.find('.name').text();
      return name.toLowerCase().includes(term.toLowerCase());
    });

    const noMatches = this.view.elms.$contacts.find('li:visible').length === 0;
    if (noMatches) this.view.showNoneMatchingMsg(term);
  }

  handleTagFilterContacts(e) {
    const filterTag = $(e.target).text();

    this.view.filterContacts($contact => {
      const candidateTags = $.map($contact.find('a'), link => $(link).text());
      return candidateTags.includes(filterTag);
    });
  }
}

new ContactManagerController(new ContactManagerView());
