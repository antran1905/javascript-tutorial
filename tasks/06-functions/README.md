# Task 06: Functions

Functions are one of the fundamental building blocks in JavaScript. A function is a reusable set of statements to perform a task or calculate a value.

## 📖 Concepts

### Function Declarations vs Expressions
There are multiple ways to define a function. A **Function Declaration** uses the `function` keyword as a standalone statement:
```javascript
function greet() {
  console.log('Hello');
}
```
A **Function Expression** creates a function inside an expression (often assigning it to a variable):
```javascript
const greet = function() {
  console.log('Hello');
};
```
One key difference is that function declarations are *hoisted* (you can call them before they are defined in the code), whereas function expressions are not.

### Return Values
Functions can return a value back to the caller using the `return` keyword. Once a `return` statement executes, the function stops immediately.
```javascript
function add(a, b) {
  return a + b;
}
```

### Default Parameters
You can provide default values for parameters. If the caller doesn't provide an argument, the default is used instead of `undefined`:
```javascript
function greet(name = 'World') {
  return `Hello, ${name}!`;
}
```

### Rest Parameters
The rest parameter syntax allows a function to accept an indefinite number of arguments as an array:
```javascript
function sum(...numbers) {
  let total = 0;
  for (let num of numbers) total += num;
  return total;
}
```

### Callbacks and Higher-Order Functions
Because functions are "first-class citizens" in JavaScript, you can pass them around like any other value. A function passed into another function is called a **callback function**. A function that accepts a function as an argument, or returns a function, is called a **higher-order function**.
```javascript
// A higher-order function returning a function
function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}
```

## ✏️ Instructions

1. Open `solution.js`.
2. Implement the `greet` function with a default parameter.
3. Implement the `multiply` function to return a product.
4. Implement `sum` using rest parameters.
5. Implement `applyOperation` to accept a callback function.
6. Implement `createMultiplier`, which is a higher-order function.

To check your work, run:
```bash
npm run check:task 06
```

## 💡 Hints
- Don't forget the `return` keyword in your functions! If you omit it, the function returns `undefined`.
- For `applyOperation`, you'll need to call the `operation` parameter like a normal function: `operation(a, b)`.
