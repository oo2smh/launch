/* MIDNIGHT #1
INPUT: {integer} timeInMinutes
OUTPUT: {str} time in 24 hr format
RULES
- midnight is the starting pt
- midnight can be represented by 24 or 0
  - positive input = number of min after midnight
    - positive input adds from 0
  - negative input = number of min before midnight
    - negative input subtracts from 24
- hour and minutes are both 2 digits (padZero)
============================================
GOAL: Given the timeinMinutes with midnight (0|24) as the starting pt, return
the time in a 24 hour format string
DS
- {str} militaryTime
============================================
PROCESS
SET const HOURS_IN_DAY = 24
SET const MINUTES_IN_HOUR = 60
SET const MINUTES_IN_DAY
  CALCULATE MINUTES_IN_DAY = HOURS_IN_DAY * MINUTES_IN_HOUR
GET deltaMinutes within range [0,24]
  CHECK if deltaMinutes > HOURS_IN_DAY
    YES: SET deltaMinutes -= HOURS_IN_DAY
  CHECK if deltaMinutes < 0
    YES: SET deltaMinutes += HOURS_IN_DAY
! EXTRACT the hours from the inputMinutes
  EXTRACT the remaining minutes
  FORMAT string
    PAD numbers less than 10 with a leading 0
    ADD a middle colon between hours and minutes
*/

// LS SOLUTION
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const MINUTES_IN_DAY = MINUTES_IN_HOUR * HOURS_IN_DAY;

function timeOfDay(deltaMinutes) {
  deltaMinutes = getMinutesInRange(deltaMinutes);

  let hours = Math.floor(deltaMinutes / MINUTES_IN_HOUR);
  let minutes = deltaMinutes % MINUTES_IN_HOUR;

  hours = addLeadingZeroes(hours);
  minutes = addLeadingZeroes(minutes);

  return `${hours}:${minutes}`;
}

function getMinutesInRange(deltaMinutes) {
  while (deltaMinutes > MINUTES_IN_DAY) {
    deltaMinutes -= MINUTES_IN_DAY;
  }

  while (deltaMinutes < 0) {
    deltaMinutes += MINUTES_IN_DAY;
  }

  return deltaMinutes;
}

function addLeadingZeroes(number) {
  if (number < 10) return `0${number}`;
  return number;
}

// SOLUTION USING DATE
function timeOfDayWithDate(deltaMinutes) {
  let time = new Date();
  time.setHours(0, 0);
  // let dayOfWeek = time.getDay();
  // if (dayOfWeek !== 6) dayOfWeek = 6;

  let hours = Math.floor(deltaMinutes / MINUTES_IN_HOUR);

  if (Math.sign(hours) === -1) hours += 1;
  let minutes = deltaMinutes % MINUTES_IN_HOUR;

  time.setHours(hours);
  time.setMinutes(minutes);

  console.log(time.getHours(), time.getMinutes());

  hours = addLeadingZeroes(time.getHours());
  minutes = addLeadingZeroes(time.getMinutes());

  return `${hours}:${minutes}`;
}

// # TESTS
function testTimeOfDay() {
  console.log(timeOfDay(0) === "00:00");
  console.log(timeOfDay(-3) === "23:57");
  console.log(timeOfDay(35) === "00:35");
  console.log(timeOfDay(-1437) === "00:03");
  console.log(timeOfDay(3000) === "02:00");
  console.log(timeOfDay(800) === "13:20");
  console.log(timeOfDay(-4231) === "01:29");
}

function testTimeOfDayWithDate() {
  console.log(timeOfDayWithDate(0) === "00:00");
  console.log(timeOfDayWithDate(-3) === "23:57");
  console.log(timeOfDayWithDate(35) === "00:35");
  console.log(timeOfDayWithDate(-1437) === "00:03");
  console.log(timeOfDayWithDate(3000) === "02:00");
  console.log(timeOfDayWithDate(800) === "13:20");
  console.log(timeOfDayWithDate(-4231) === "01:29");
}

testTimeOfDayWithDate();
