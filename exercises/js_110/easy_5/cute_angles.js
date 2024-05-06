/*
{float [0-360]} -> {str angle in degrees,min, sec}
* deg(˚) '(min) "(sec)
* up to 360 deg
* 1 deg = 60 min
* 1 min = 60 sec
* Everything to the right of decimal pt are minutes/seconds
*/

function dms(float) {
  let validDeg = 360;
  while (float < 0) {
    float += validDeg;
  }

  while (float > 360) {
    float -= validDeg;
  }

  let minutes = getDecimalNumbers(float) * 60;
  let seconds = getDecimalNumbers(minutes) * 60;

  minutes = Math.floor(minutes);
  seconds = Math.floor(seconds);

  if (minutes < 10) minutes = `0${minutes}`;
  if (seconds < 10) seconds = `0${seconds}`;

  console.log(`${Math.floor(float)}°${minutes}'${seconds}"`);
  return `${Math.floor(float)}°${minutes}'${seconds}"`;
}

function getDecimalNumbers(num) {
  return num - Math.floor(num);
}

console.log(
  dms(30) === "30°00'00\"",
  dms(76.73) === "76°43'48\"",
  dms(254.6) === "254°35'59\"",
  dms(93.034773) === "93°02'05\"",
  dms(0) === "0°00'00\"",
  dms(360) === ("360°00'00\"" || "0°00'00\""),
  dms(-1) === "359°00'00\"",
  dms(400) === "40°00'00\"",
  dms(-40) === "320°00'00\"",
  dms(-420) === "300°00'00\"",
);
