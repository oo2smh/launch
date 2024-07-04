/* [29min]
Some people believe that Fridays that fall on the 13th day of the month are unlucky days. Write a function that takes a year as an argument and returns the number of Friday the 13ths in that year. You may assume that the year is greater than 1752, which is when the United Kingdom adopted the modern Gregorian Calendar. You may also assume that the same calendar will remain in use for the foreseeable future.
=============================
GOAL:
IN: {int} year > 1752
OUT: {int} # of Friday the 13th in that year
RULES
- Gregorian Calendar
- 1752: is when Gregorian calendar was made. So I am assuming that Jan 1 1752 = Monday
    Assumption is wrong: Jan 1 1752 is Saturday
- 28 days in February, 31days alternating with 30 days
    Jan: 31, Feb: 28, Mar: 31, April: 30, May: 31, etc
NOTES
- Probably have to use the Date constructor to get the dayOfWeek


MM: I need a way to get what day Jan 1st falls on any given year. Then I have to extract the 13th of every month. See if it falls on a Friday. If so, I will add to a v:count variable. In the end, I will return the v:count

PROCESS
- DETERMINE dayOfWeek of Jan 1st of in:year
- STORE all 13th of Month in an array
- FILTER each i:date of array for those that fall on a Friday
- RETURN the amt/length of Fridays

(Date constructor methods, [], filter, length)
*/

function fridayThe13ths(year) {
  let count = 0;
  for (let month = 1; month <= 12; month++) {
    let date = new Date(`${year}, ${month}, 13`);
    if (date.getDay() === 5) count++;
  }
  return count;
}

console.log(
  fridayThe13ths(1986), // 1
  fridayThe13ths(2015), // 3
  fridayThe13ths(2017), // 2
);
