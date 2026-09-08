# Task 23: Dates

Handling dates and times in JavaScript is done using the `Date` object. The `Date` object represents a single moment in time in a platform-independent format.

## Creating Dates
You can create a `Date` object in several ways:
```javascript
// Current date and time
const now = new Date();

// Date string
const specificDateStr = new Date("2024-01-15T12:00:00Z");

// Year, month, day, hours, minutes, seconds, milliseconds
// IMPORTANT: Month is 0-indexed (0 = January, 11 = December)
const specificDate = new Date(2024, 0, 15); // Jan 15, 2024
```

## Getting Date Components
Once you have a `Date` object, you can extract its parts using "get" methods:
```javascript
const d = new Date(2024, 2, 10, 15, 30, 45); // March 10, 2024 15:30:45

d.getFullYear(); // 2024
d.getMonth(); // 2 (March - Remember it's 0-indexed!)
d.getDate(); // 10 (Day of the month)
d.getDay(); // 0 (Day of the week: 0=Sunday, 1=Monday, ... 6=Saturday)
d.getHours(); // 15
d.getMinutes(); // 30
d.getSeconds(); // 45
```

## Setting Date Components
You can also modify a `Date` object using "set" methods:
```javascript
const d = new Date();
d.setFullYear(2025);
d.setMonth(5); // June
d.setDate(15);
```

## Date Arithmetic
Dates can be subtracted to find the difference in milliseconds:
```javascript
const d1 = new Date(2024, 0, 1);
const d2 = new Date(2024, 0, 2);
const diffMs = d2 - d1; // 86400000 (milliseconds in a day)
```
You can get the current timestamp (milliseconds since Jan 1, 1970) directly using `Date.now()`.

## Instructions

Implement the following functions in `solution.js`:

1.  **`getDateParts(date)`**
    Given a `Date` object, return an object with the following properties: `year`, `month` (1-based, meaning Jan=1, Dec=12), `day` (date of month), `dayOfWeek` (0=Sun, 6=Sat), `hours`, `minutes`, `seconds`.
2.  **`formatDate(date, format)`**
    Given a `Date` object and a `format` string ('YYYY-MM-DD' or 'DD/MM/YYYY'), return the formatted string. Remember to pad single-digit months and days with a leading zero (e.g., "05").
3.  **`addDays(date, days)`**
    Return a *new* `Date` object that is `days` days after the original `date`. Do not mutate the original `date` object.
4.  **`daysBetween(date1, date2)`**
    Return the absolute number of full days between `date1` and `date2`. Discard any fractional days.
5.  **`isWeekend(date)`**
    Return `true` if the given date is a Saturday or Sunday, and `false` otherwise.
6.  **`isLeapYear(year)`**
    Given a year (number), return `true` if it's a leap year, and `false` otherwise. (A year is a leap year if it is divisible by 4, but not by 100 unless it is also divisible by 400).

## Hints
- `String.prototype.padStart(targetLength, padString)` is great for adding leading zeros: `String(5).padStart(2, '0')` -> `"05"`.
- To create a new date from an existing one without mutating it, pass the time value into a new Date constructor: `new Date(date.getTime())`.
- 1 day = 24 * 60 * 60 * 1000 milliseconds.
- `Math.abs()` and `Math.floor()` might be useful for calculating the days between dates.

Run your code to check your solution:
```bash
npm run check:task 23
```
