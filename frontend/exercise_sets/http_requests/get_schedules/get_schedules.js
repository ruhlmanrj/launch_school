// Makes requests to an API provider for schedule booking information

function alertSchedules(schedules) {
  const counts = staffScheduleCounts(schedules);
  alert(schedulesAlertMessage(counts));
}

function schedulesAlertMessage(scheduleCounts) {
  const messages = [];

  for (const staffId in scheduleCounts) {
    const message = `Staff ID: ${staffId} | open slots: ${scheduleCounts[staffId]}`
    messages.push(message);
  }

  return messages.join('\n');
}

function staffScheduleCounts(schedules) {
  const counts = {};
  const countStaff = ({ staff_id, student_email }) => {
    if (student_email === null) { return; }

    counts[staff_id] ||= 0;
    counts[staff_id] += 1;
  };

  schedules.forEach(countStaff)
  return counts;
}

function abortAfter(request, milliseconds) {
  setTimeout(() => request.abort(), milliseconds);
}

const reqSchedules = new XMLHttpRequest();
reqSchedules.open('GET', 'http://localhost:3000/api/schedules');
reqSchedules.responseType = 'json';

reqSchedules.onload = () => {
  const schedules = reqSchedules.response;
  if (schedules.length === 0) {
    alert('There are no schedules available.');
  } else {
    alertSchedules(schedules);
  }
};

reqSchedules.onloadend = () => alert('Your request is complete.');
reqSchedules.onabort = () => alert('Your request took too long. Please try again.');

abortAfter(reqSchedules, 5000);

reqSchedules.send();
