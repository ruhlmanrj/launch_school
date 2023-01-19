// app.js

/*

===== Features
- 'Add contact' buttons
  - Opens the 'add contact' form
- 'Add contact' form
  - Validates input
  - Submits new contact information to server
- Search contacts bar
  - Filters contacts based on each input
  - 'There are no contacts starting with '$input' message shown if no matches
- Edit contact
  - Similar to add contact form
  - Edits an existing contact
- Delete contact
  - Alerts for confirmation
  - Deletes contact if confirmed

===== Features Deeper Dive
- 'Add contact' button
  - Fires when either add button is clicked (controller)
  - Slides in the contact form (view)
  - Shows the overlay (view)
- 'Add contact' form
  - Fires when submit event fires on the add contact form (controller)
  - Displays validation messages and style changes if any values
    are missing (view)
  - Submits request to api with data if valid (controller)
- 'Edit contact' button
  - Fires when edit button of contact in list is clicked (controller)
  - Get up to date data for contact from api (controller)
  - Use data to render update form (view)
  - Pulls up the edit form for the contact, pre-populating fields
- 'Edit contact' form
  - Fires when a submit event is fired on the edit form
  - Same validations as contact form
  - Submits a request to edit an existing contact if fields are valid
- 'Delete contact' button
  - Fires when the delete contact button is clicked for a contact
  - Alerts for confirmation
  - Make a request to delete the contact if confirmed (controller)
  - Re-render contacts
    - Pull data from api for contacts (controller)
    - Render contacts (view)
*/

/*

===== Adding/updating a contact
- Listen for submit events on the contact form
- Validate all inputs
- Send data to server
- Render contacts

*/

class ContactManagerView {
  constructor() {
    this.elms = {
      $contact: $('.contact-form'),
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

  showAddContactForm() {
    const $contact = this.elms.$contact;
    $contact.find('.form-type').text('Add');

    const fullHeight = $contact.css('height', 'auto').height();
    $contact.css('height', '0');

    const processTransitions = () => {
      $contact.css('height', fullHeight);
      this.showOverlay();
      setTimeout(() => $contact.css('height', 'auto'), 1000);
    };

    setTimeout(processTransitions);
  }

  hideAddContactForm() {
    const $contact = this.elms.$contact;
    $contact.css('height', $contact.height());

    setTimeout(() => {
      this.elms.$contact.css('height', '');
      this.hideOverlay();
    });
  }

  showOverlay() {
    this.elms.$overlay.addClass('visible');
  }

  hideOverlay() {
    this.elms.$overlay.removeClass('visible');
  }
}

class ContactManagerController {
  constructor(view) {
    this.view = view;
    this.bindHandlers();
  }

  bindHandlers() {
    const $contact = this.view.elms.$contact;
    $('main').on('click', '.add-btn', () => this.view.showAddContactForm());
    $contact.on('click', '[type="button"]', () =>
      this.view.hideAddContactForm()
    );
  }
}

const app = new ContactManagerController(new ContactManagerView());

// full_name, phone_number, email, tags: []

const context = {
  full_name: 'Robert Ruhlman',
  phone_number: '810-278-4569',
  email: 'ruhlmanrj@gmail.com',
  tags: ['Engineering', 'Healthcare'],
};
