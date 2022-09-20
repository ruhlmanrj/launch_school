/**
 * Makes AJAX requests to cancel bookings and schedules.
 */

const scheduleForm = document.getElementById('delete-schedule');
const bookingForm = document.getElementById('delete-booking');

async function deleteResource(url) {
  const resourceType = url.split('/').at(-2).slice(0, -1);
  const requestMethod = (resourceType === 'schedule' ? 'DELETE' : 'PUT');

  const response = await fetch(url, { method: requestMethod });
  
  switch (response.status) {
    case 204:
      alert(`${resourceType} was removed successfully`);
      resourceType === 'schedule' ? scheduleForm.reset() : bookingForm.reset();
      break;
    default:
      const message = await response.text();
      alert(message);
  }
}

scheduleForm.onsubmit = event => {
  event.preventDefault();
  const id = scheduleForm['schedule_id'].value;
  const url = 'http://localhost:3000/api/schedules/' + id;
  deleteResource(url);
}

bookingForm.onsubmit = event => {
  event.preventDefault();
  const id = bookingForm['booking_id'].value;
  const url = 'http://localhost:3000/api/bookings/' + id;
  deleteResource(url);
}
