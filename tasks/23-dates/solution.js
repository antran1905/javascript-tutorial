function getDateParts(date) {
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  };
}

function formatDate(date, format) {
  // TODO: Implement this function
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  return format.replace("YYYY", year).replace("MM", month).replace("DD", day);
}

function addDays(date, days) {
  // TODO: Implement this function
}

function daysBetween(date1, date2) {
  const difference = Math.abs(date2 - date1);

  return difference / (1000 * 60 * 60 * 24);
}

function isWeekend(date) {
  const day = date.getDay();

  return day === 0 || day === 6;
}

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

module.exports = {
  getDateParts,
  formatDate,
  addDays,
  daysBetween,
  isWeekend,
  isLeapYear,
};
