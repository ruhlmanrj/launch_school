// Takes a string of formatted data representing a collection of emails and
// outputs a message with the number of emails it contains as well as the
// date range of the emails.

const fs = require('fs');

function emailCount(data) {
  const count = data.match(/From/g).length;

  const dates = getDates(data);
  const [earliest, latest] = datesMinMax(dates);

  const earlyString = earliest.toDateString();
  const lateString  = latest.toDateString();

  console.log(`Count of Email: ${count}`);
  console.log(`Date Range: ${earlyString} - ${lateString}`);
}

function getDates(data) {
  const parseDates  = /\d{2}-\d{2}-\d{4}/g;
  const dateStrings = data.match(parseDates);

  return dateStrings.map(dateString => new Date(dateString));
}

function datesMinMax(dates) {
  const sorted = dates.sort(ascendingSort);

  return [ sorted[0], sorted[sorted.length - 1] ]
}

function ascendingSort(date1, date2) {
  if (date1 > date2) {
    return 1;
  } else if (date1 < date2) {
    return -1;
  } else {
    return 0;
  }
}

const filepath = `${__dirname}/email_data.txt`;
const emailData = fs.readFileSync(filepath, 'utf8');

emailCount(emailData);
