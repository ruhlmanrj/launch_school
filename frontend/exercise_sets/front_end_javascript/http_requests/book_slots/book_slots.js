/**
 * Asyncronously submits form data to API for booking a schedule.
 * If the email does not exist in the API, an asyncronous request
 * is made to add that user and also book the schedule.
 */

const bookingForm = document.getElementById('book-schedule');
const createStudentForm = document.getElementById('create-student');

async function populateSelectOptions() {
  const schedules = await getAvailableSchedules();
  const staffMembers = await getStaffMembers();

  const idToName = {};
  staffMembers.forEach(({ id, name }) => idToName[id] = name);
  schedules.forEach(schedule => schedule.name = idToName[schedule.staff_id]);

  const toOption = ({ id, name, date, time }) => {
    const option = document.createElement('option');
    option.value = id;
    option.textContent = [name, date, time].join(' | ');
    return option;
  };

  const select = bookingForm.querySelector('select');
  select.innerHTML = '';

  const options = schedules.map(toOption);
  options.forEach(option => select.appendChild(option));
}

async function getAvailableSchedules() {
  const response = await fetch('http://localhost:3000/api/schedules');
  const schedules = await response.json();
  return schedules.filter(({ student_email }) => student_email === null);
}

async function getStaffMembers() {
  const response = await fetch('http://localhost:3000/api/staff_members');
  return await response.json();
}

async function bookScheduleRequest() {
  const data = new FormData(bookingForm);
  const response = await fetch(bookingForm.action, {
    method: 'POST',
    body: data
  });

  switch (response.status) {
    case 204:
      alert('The schedule has been booked.');
      bookingForm.reset();
      populateSelectOptions();
      break;
    case 404:
      const text = await response.text();
      handle404ScheduleRequest(text, data);
  }
}

function handle404ScheduleRequest(responseText, formData) {
  const bookingSequence = responseText.match(/\d+/)?.[0];
  if (bookingSequence) {
    presentCreateStudentForm(bookingSequence, formData);
  } else {
   alert(text);
   populateSelectOptions();
  }
}

function presentCreateStudentForm(bookingSequence, formData) {
  createStudentForm.removeAttribute('hidden');
  const emailInput = createStudentForm.querySelector('[name="email"]');
  const bookSeqInput = createStudentForm.querySelector('[name="booking_sequence"]');

  emailInput.value = formData.get('student_email');
  bookSeqInput.value = bookingSequence;
}

async function createStudentRequest() {
  const data = new FormData(createStudentForm);
  const response = await fetch(createStudentForm.action, {
    method: 'POST',
    body: data,
  });

  const text = await response.text();
  switch (response.status) {
    case 201:
      createStudentForm.setAttribute('hidden', true);
      createStudentForm.reset();
      bookingForm.requestSubmit();
      alert(text);
      break;
    default:
      alert(text);
  }
}

populateSelectOptions();

bookingForm.onsubmit = event => {
  event.preventDefault();
  bookScheduleRequest();
};

createStudentForm.onsubmit = event => {
  event.preventDefault();
  createStudentRequest();
}
