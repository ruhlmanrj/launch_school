/**
 * Uses AJAX to display a list of clickable dates that display a list of
 * booked appointment details for the date.
 */

const API_ROOT = 'http://localhost:3000';

async function showBookings() {
  const dlBookings = document.createElement('dl');
  document.body.appendChild(dlBookings);

  const datesBookings = await datesBookingsMap();
  for (const date in datesBookings) {
    const dlEntry = dlEntryBookings(date, datesBookings[date]);
    dlEntry.forEach(element => dlBookings.appendChild(element));
  }
}

async function datesBookingsMap() {
  const dates = await datesForBookings();
  const promises = dates.map(bookingsForDate);
  const bookings = await Promise.all(promises);

  const map = {};
  dates.forEach((date, index) => {
    map[date] = bookings[index];
  });

  console.log(map);
  return map;
}

async function datesForBookings() {
  const response = await fetch(API_ROOT + '/api/bookings');
  const dates = await response.json();

  return sortDates(dates);
}

function sortDates(dates) {
  return dates.sort((dateStringA, dateStringB) => {
    const [mmA, ddA, yyA] = dateStringA.split('-');
    const [mmB, ddB, yyB] = dateStringB.split('-');

    const dateA = new Date(['20' + yyA, mmA, ddA].join('-'));
    const dateB = new Date(['20' + yyB, mmB, ddB].join('-'));

    return +dateA - +dateB;
  });
}

async function bookingsForDate(date) {
  const response = await fetch(API_ROOT + `/api/bookings/${date}`);
  const bookings = await response.json();

  return sortBookings(bookings);
}

function sortBookings(bookings) {
  return bookings.sort((booking1, booking2) => {
    const [hhA, mmA] = booking1[2].split(':');
    const [hhB, mmB] = booking2[2].split(':');

    const diffHours = +hhA - +hhB;
    const diffMins = +mmA - +mmB;

    if (diffHours !== 0) {
      return diffHours;
    } else if (diffMins !== 0) {
      return diffMins;
    } else {
      return 0;
    }
  });
}

function dlEntryBookings(date, bookings) {
  const dtDate = document.createElement('dt');
  const ddBookings = document.createElement('dd');
  
  const ulBookings = document.createElement('ul');
  ddBookings.appendChild(ulBookings);
  
  ulBookings.hidden = true;
  dtDate.onclick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      ulBookings.toggleAttribute('hidden');
    }
  };
  
  dtDate.textContent = date;

  const liAppend = booking => {
    const liBooking = document.createElement('li');
    liBooking.textContent = booking.join(' | ');
    ulBookings.appendChild(liBooking);
  };

  bookings.forEach(liAppend);

  return [dtDate, ddBookings];
}

// showBookings();

console.log(arrow())
