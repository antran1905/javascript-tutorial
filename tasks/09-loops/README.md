# Task 09: Loops

Loops offer a quick and easy way to do something repeatedly. This chapter covers the different loop structures available in JavaScript.

## 📖 Concepts

### `for` Loop
The most common loop. It consists of an initialization, a condition, and an afterthought (increment/decrement).
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i); // Outputs 0, 1, 2, 3, 4
}
```

### `while` and `do...while` Loops
A `while` loop continues as long as a specified condition is true.
```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```
A `do...while` loop is similar, but the body is executed at least once before the condition is checked.

### `for...of` and `for...in`
- `for...of`: Iterates over iterable objects like Arrays and Strings. It gives you the *values*.
- `for...in`: Iterates over the enumerable properties of an object. It gives you the *keys* (or indexes).
```javascript
const arr = ['a', 'b', 'c'];
for (const val of arr) {
  console.log(val); // 'a', 'b', 'c'
}
```

### `break` and `continue`
- `break`: Exits the loop entirely.
- `continue`: Skips the rest of the current iteration and jumps to the next one.

### The Accumulator Pattern
A very common pattern with loops is initializing a variable outside the loop and updating it inside the loop. This is known as the accumulator pattern:
```javascript
let sum = 0; // Accumulator
for (let i = 1; i <= 5; i++) {
  sum += i;
}
```

## ✏️ Instructions

1. Open `solution.js`.
2. Implement `sumRange` using a `for` or `while` loop.
3. Implement `factorial` (e.g., `5! = 5 * 4 * 3 * 2 * 1`).
4. Implement `repeatString` without using the built-in `.repeat()` method.
5. Implement `findIndex` using a loop.
6. Implement `countVowels` using the accumulator pattern.

To check your work, run:
```bash
npm run check:task 09
```

## 💡 Hints
- In `countVowels`, you can convert the string to lowercase first, or check for both uppercase and lowercase vowels.
- Be careful of infinite loops! Make sure your `while` loop conditions will eventually become false.
