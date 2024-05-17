/*
INPUT: {float} [0,360] angle OUTPUT: {str} angle in degrees, minutes, seconds
RULES - Use degree symbol (˚) to represent degrees, a single quote (') to
represent minutes, and a double quote (") to represent seconds. - 1deg = 60min,
1min = 60sec - All units have a min of 2 places of space that they occupy
- Appears from examples that input is > 0 - The angle is the degree GOAL: Return
a 3part stringified number of deg,min,sec
==================================================
DATA ST
- DEG_SYMBOL = ˚
- MIN_SYMBOL = '
- SEC_SYMBOL = "
- MIN_IN_SEC = 60
- MIN_IN_DEG = 60
=================================================
PROCESS
* GET/SET deg
  - EXTRACT integer from input (Math.trunc)
* GET/SET min
  - ISOLATE the decimal point (input - deg) - CONVERT decimal point into
  remainingMinutes - EXTRACT the integer of minutes
* GET/SET sec
  - ISOLATE the decimal point from remainingMinutes - CONVERT decimal pt into
  remainingSeconds - CALCULATE sec from remainder of minutes - EXTRACT whole
  number (integer) from seconds
* FORMAT each result to have at least 2 placeholders ADD necessary symbols at
* the end of deg,min,sec RETURN result

SUBPROCESSES
- formatUnit(unit): formats unit to have 2 placeholders
*/

function dms(angle) {
  const DEG_SYMBOL = "˚";
  const MIN_SYMBOL = "'";
  const SEC_SYMBOL = `"`;
  const MIN_IN_DEG = 60;
  const SEC_IN_MIN = 60;

  angle = getInRange(angle);

  let degrees = Math.trunc(angle);
  let remainingMinutes = (angle - degrees) * MIN_IN_DEG;
  let minutes = Math.trunc(remainingMinutes);
  let remainingSeconds = (remainingMinutes - minutes) * SEC_IN_MIN;
  let seconds = Math.trunc(remainingSeconds);

  degrees = formatUnit(degrees) + DEG_SYMBOL;
  minutes = formatUnit(minutes) + MIN_SYMBOL;
  seconds = formatUnit(seconds) + SEC_SYMBOL;

  return `${degrees}${minutes}${seconds}`;
}

function formatUnit(unit) {
  if (unit < 10) unit = `0${unit}`;
  return unit;
}

function getInRange(angle) {
  while (angle > 360) {
    angle -= 360;
  }

  while (angle < 0) {
    angle += 360;
  }
  return angle;
}

// TESTS
console.log(
  dms(30), // 30°00'00"
  dms(76.73), // 76°43'48"
  dms(254.6), // 254°35'59"
  dms(93.034773), // 93°02'05"
  dms(0), // 0°00'00"
  dms(360), // 360°00'00" or 0°00'00")
  dms(-1), // 359°00'00"
  dms(400), // 40°00'00"
  dms(-40), // 320°00'00"
  dms(-420), // 300°00'00"
);
