# Task 08: Conditionals

Conditionals allow your code to make decisions and execute different blocks based on whether a condition is true or false.

## 📖 Concepts

### `if`, `else if`, `else`
The standard way to branch logic:
```javascript
let score = 85;
if (score >= 90) {
  console.log('A');
} else if (score >= 80) {
  console.log('B');
} else {
  console.log('C');
}
```

### Comparison and Logical Operators
- **Comparison:** `===` (strict equality), `!==` (strict inequality), `>`, `<`, `>=`, `<=`
- **Logical:** `&&` (AND), `||` (OR), `!` (NOT)
Always use strict equality (`===`) in JavaScript to avoid unexpected type coercion bugs.

### `switch` Statement
A `switch` statement evaluates an expression and matches it against `case` clauses. It's great for matching a single variable against many potential values.
```javascript
switch (fruit) {
  case 'apple':
    console.log('Red');
    break; // Always remember the break!
  case 'banana':
    console.log('Yellow');
    break;
  default:
    console.log('Unknown color');
}
```

### Ternary Operator
The conditional (ternary) operator is the only JavaScript operator that takes three operands. It's a shortcut for a simple `if/else`:
```javascript
// condition ? true_expression : false_expression
const status = (age >= 18) ? 'adult' : 'minor';
```

### Truthy and Falsy Values
In JavaScript, a value is "falsy" if it evaluates to `false` in a boolean context (like an `if` condition).
There are exactly 6 falsy values:
1. `false`
2. `0` (and `-0`, `0n`)
3. `""` (empty string)
4. `null`
5. `undefined`
6. `NaN` (Not a Number)
Everything else is "truthy"!

## ✏️ Instructions

1. Open `solution.js`.
2. Implement `getGrade` using `if/else if/else`.
3. Implement `fizzBuzz` using correct order of conditions.
4. Implement `getDayType` (using a `switch` is recommended).
5. Implement `getSign` and `canVote`.

To check your work, run:
```bash
npm run check:task 08
```

## 💡 Hints
- For `fizzBuzz`, check the `n % 15 === 0` (or `n % 3 === 0 && n % 5 === 0`) condition *first*. If you check `n % 3 === 0` first, 15 will output "Fizz" instead of "FizzBuzz".
- Don't forget `break` in your `switch` cases, or they will "fall through" to the next case!
