# Task 15: Template Literals

Welcome to Task 15! Template literals provide a clean, elegant way to create strings in JavaScript. They allow for embedded expressions, multiline strings, and even complex custom string parsing.

## 📖 Concepts

Template literals are enclosed by backticks (`` ` ``) instead of double or single quotes.

### Basic Interpolation

You can inject variables directly into the string using `${variableName}`. This is much cleaner than concatenating strings with `+`.

```javascript
const name = 'World';

// Old way
const oldGreeting = 'Hello, ' + name + '!';

// Template literal
const newGreeting = `Hello, ${name}!`;
```

### Expressions in Templates

You can place any valid JavaScript expression inside the `${}` placeholders, including math, function calls, and ternary operators.

```javascript
const price = 10;
const tax = 0.2;

// Math
const message = `Total: $${price * (1 + tax)}`; // Total: $12

// Ternary operator for conditional text
const stock = 0;
const status = `Status: ${stock > 0 ? 'In Stock' : 'Out of Stock'}`;
```

### Multiline Strings

With standard strings, creating multiple lines requires adding `\n` characters. Template literals naturally support multiline strings just by pressing enter.

```javascript
// Whitespace and newlines are preserved!
const poem = `
Roses are red,
Violets are blue,
Template literals,
Are awesome too.
`;
```

### Number Formatting

When displaying currency or specific precision numbers in templates, you often combine interpolation with methods like `.toFixed(n)` which formats a number using fixed-point notation.

```javascript
const value = 42.1;
console.log(`$${value.toFixed(2)}`); // "$42.10"
```

### Tagged Templates

Advanced feature: You can attach a function (a "tag") to a template literal. The tag function receives the static string parts and the evaluated expressions as arguments, allowing you to intercept and customize how the final string is built.

```javascript
function myTag(strings, ...values) {
  // strings: array of string literals
  // values: array of interpolated expressions
  return strings[0] + values[0].toUpperCase() + strings[1];
}

const user = 'alice';
const result = myTag`Hello ${user}!`; // "Hello ALICE!"
```

## ✏️ Instructions

Open `solution.js` and implement the following functions using template literals:
1. `greetUser(name, time)`: Return the string `'Good <time>, <name>!'`
2. `createList(items)`: Given an array of strings, return a multiline string where each item is on a new line and numbered (e.g., `1. first\n2. second`).
3. `formatCurrency(amount, currency)`: Format the `amount` to 2 decimal places and prefix it with the `currency` string (defaulting to `$`). Example output: `'$12.50'`.
4. `createTable(headers, rows)`: Join the headers array with `' | '`, followed by a newline, followed by each row joined with `' | '` on its own line.
5. `highlight(strings, ...values)`: A tagged template function that wraps every interpolated value with `**` before combining it with the static strings.

## 💡 Hints

- For `createList` and `createTable`, try mapping over the array to generate the formatted strings, and then use `.join('\n')`.
- When implementing a tagged template like `highlight`, use `reduce` or a loop to interleave the `strings` and `values` arrays. Note that there is always one more string literal than there are values!

When you are ready, check your solution by running:
```bash
npm run check:task 15
```
