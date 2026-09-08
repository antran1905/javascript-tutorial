# Task 11: Array Methods

Welcome to Task 11! In this task, you will learn how to use powerful built-in Array methods in JavaScript. These methods allow you to manipulate, transform, and compute data effectively without using traditional loops.

## 📖 Concepts

JavaScript provides numerous functional array methods. Most of these methods take a callback function as their first argument.
The standard callback signature looks like this: `(element, index, array) => { ... }`.

### Transforming and Filtering

- **`.map(callback)`**: Transforms each element and returns a *new* array of the exact same length.
- **`.filter(callback)`**: Keeps elements that pass the test implemented by the callback and returns a *new* array.

```javascript
const numbers = [1, 2, 3, 4, 5];

// Using map to double values
const doubled = numbers.map(num => num * 2);
// [2, 4, 6, 8, 10]

// Using filter to keep even numbers
const evens = numbers.filter(num => num % 2 === 0);
// [2, 4]
```

### Reducing and Searching

- **`.reduce(callback, initialValue)`**: Reduces the array to a single value. The callback is `(accumulator, currentElement) => { ... }`. The accumulator stores the accumulated value returned in the last invocation.
- **`.find(callback)`**: Returns the *first* element that passes the test, or `undefined` if not found.
- **`.every(callback)`**: Returns `true` if *all* elements pass the test.

```javascript
const items = [{ name: 'apple', price: 2 }, { name: 'banana', price: 3 }];

// Using reduce to calculate total price
const total = items.reduce((acc, item) => acc + item.price, 0); // 5

// Using find to locate an item
const apple = items.find(item => item.name === 'apple');

// Using every
const allCheap = items.every(item => item.price < 5); // true
```

### Sorting and Mutability

- **`.sort(compareFn)`**: Sorts the array. **WARNING:** This method mutates the original array!
To sort without mutating, copy the array first using the spread operator `[...arr]`.
The comparator function should return a negative number if `a < b`, a positive number if `a > b`, and 0 if equal.

```javascript
const scores = [40, 10, 50, 20];

// Mutating sort
scores.sort((a, b) => a - b); // Ascending: [10, 20, 40, 50]

// Non-mutating sort
const original = [40, 10, 50, 20];
const sorted = [...original].sort((a, b) => a - b);
```

### Method Chaining

You can chain these methods together to perform complex operations concisely:

```javascript
const data = [1, 2, 3, 4, 5];
const result = data
  .filter(n => n % 2 !== 0) // [1, 3, 5]
  .map(n => n * 10);        // [10, 30, 50]
```

## ✏️ Instructions

Open `solution.js` and implement the following functions using the appropriate array methods:
1. `doubleAll(arr)`: Double all numbers.
2. `getAdults(people)`: Return people with age >= 18.
3. `totalPrice(items)`: Sum up all the prices.
4. `findByName(people, name)`: Find the first person with the matching name.
5. `allPositive(arr)`: Check if all numbers are strictly positive (> 0).
6. `sortByAge(people)`: Return a *new* array of people sorted ascending by age.

## 💡 Hints

- Don't forget to return the value from your callback functions! (Arrow functions with no braces do this implicitly).
- Remember to provide the `initialValue` when using `.reduce()`, especially when reducing an array of objects to a primitive like a number.
- For `sortByAge`, do not mutate the input array. Use `[...people].sort(...)`.

When you are ready, check your solution by running:
```bash
npm run check:task 11
```
