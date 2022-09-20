/**
* Works with html that displays a form. Allows the generation of additional
* forms and asynchronously submits form data to API provider for adding schedules.
*/

const API_STAFF_MEMBERS = 'http://localhost:3000/api/staff_members';
const API_SCHEDULES = 'http://localhost:3000/api/schedules';

const formsDiv = document.getElementById('forms');
const addButton = document.getElementById('add-schedules');
const submitButton = document.getElementById('submit-schedules');

let formCount = 1;

async function populateSelectOptions() {
  const toOption = ({ id, name }) => {
    const option = document.createElement('option');
    option.value = id;
    option.textContent = name;
    return option;
  };

  const appendAsOption = member => select.appendChild(toOption(member));
  
  const response = await fetch(API_STAFF_MEMBERS, { method: 'GET' });
  const staff = await response.json();

  const select = document.querySelector('select');
  staff.forEach(appendAsOption)
}

function addNewForm() {
  const newForm = formsDiv.lastElementChild.cloneNode(true);
  formCount += 1;
  newForm.reset();
  
  const SchedNumParagraph = newForm.querySelector('p');
  SchedNumParagraph.textContent = `Schedule ${formCount}`;
  
  formsDiv.appendChild(newForm);
}

async function submitSchedulesJson() {
  const resetFormsDiv = () => {
    const firstForm = formsDiv.children[0];
    firstForm.reset();
    formsDiv.replaceChildren(firstForm);
  };

  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: schedulesJson(),
  };

  const response = await fetch(API_SCHEDULES, options);

  switch (response.status) {
    case 400:
      alert(await response.text());
      break;
    case 201:
      resetFormsDiv();
      alert(await response.text());
  }
}

function schedulesJson() {
  const schedules = [...formsDiv.children].map(scheduleObject);
  return JSON.stringify({ schedules });
}

function scheduleObject(form) {
  const scheduleObject = {};
  const data = new FormData(form);
  
  for (const [name, value] of data.entries()) {
    scheduleObject[name] = value;
  }
  
  return scheduleObject;
}

populateSelectOptions();
addButton.onclick = addNewForm;
submitButton.onclick = submitSchedulesJson;
