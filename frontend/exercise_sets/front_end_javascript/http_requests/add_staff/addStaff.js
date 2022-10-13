// A form that makes API requests to add a new staff member to the Booking App

async function submitForm(form) {
  const FORM_ENDPOINT = 'http://localhost:3000/api/staff_members';

  const formData = new FormData(form);
  const response = await fetch(FORM_ENDPOINT, { method: 'POST', body: formData });

  return response;
}

async function alertOutcome(responsePromise) {
  const response = await responsePromise;

  switch (response.status) {
    case 201:
      const data = await response.json();
      alert(`Successfully created staff with id: ${data.id}.`);
      break
    default:
      alert(await response.text());
  }
}

const form = document.getElementById('add-staff-form');

form.onsubmit = event => {
  event.preventDefault();
  const resetFormOnSuccess = response => {
    if (response.status === 201) { form.reset(); }
  }

  const responsePromise = submitForm(form);
  alertOutcome(responsePromise);
  responsePromise.then(resetFormOnSuccess);
};
