// GET DAY FROM HTML 
let today = document.getElementById('curentDayOfTheWeek');

// GET TIME FROM HTML
let timeUTC = document.getElementById('currentUTCTime');

// GET CURRENT DATE AND TIME
let d = new Date();

// CREATE A NEW DAY
let day = d.getDay();

switch (day) {
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
}

today.innerHTML = day;

// Output UTC time
timeUTC.innerText = `${d.getTime()}`;