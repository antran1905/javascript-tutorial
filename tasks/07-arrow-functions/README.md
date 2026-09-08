# Task 07: Arrow Functions

Arrow functions provide a more concise syntax for writing function expressions and have different behavior for the `this` keyword.

## 📖 Concepts

### Arrow Syntax
You can omit the `function` keyword and add an arrow (`=>`) between the parameters and the function body:
```javascript
const add = (a, b) => {
  return a + b;
};
```

### Block Body vs Implicit Return
If the function body has multiple lines or you want to explicitly return a value, use curly braces `{}`. This is called a **block body**.
If your function only does one thing and returns a value, you can omit the curly braces and the `return` keyword. This is an **implicit return**:
```javascript
// Implicit return (no braces)
const double = x => x * 2;

// Block body (with braces)
const doubleBlock = (x) => {
  return x * 2;
};
```
Note: If you have exactly one parameter, you can also omit the parentheses around the parameter (e.g., `x => ...`), but it's common practice to keep them.

### No `arguments` Object
Arrow functions do not have their own `arguments` object. If you need a variable number of arguments, use rest parameters (`...args`):
```javascript
const sum = (...args) => args.reduce((a, b) => a + b, 0);
```

### Arrow Functions and `this`
Arrow functions have a **lexical `this`**. This means they do not bind their own `this` context, but inherit it from the surrounding code. This makes them ideal for callbacks, but unsuitable as object methods when you need to access properties of the object via `this`.

### When to use Arrow vs Regular Functions
- Use **Arrow Functions** for short callbacks, array methods (like `map`, `filter`), and when you need to preserve the outer `this` context.
- Use **Regular Functions** (declarations or expressions) for object methods, constructor functions, or when you explicitly need the `arguments` object.

## ✏️ Instructions

1. Open `solution.js`.
2. Convert the provided `null` variables into arrow functions.
3. Use implicit returns where possible (e.g., for `double` and `isPositive`).
4. Implement `getFullName`, `filterEvens`, and `sortDescending` using arrow syntax.

To check your work, run:
```bash
npm run check:task 07
```

## 💡 Hints
- In `sortDescending`, remember that the `sort` method mutates the array and takes a comparison function: `(a, b) => b - a`.
- If you're returning an object literal using an implicit return, you must wrap the object in parentheses: `x => ({ key: 'value' })`.
