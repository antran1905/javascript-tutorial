# Task 10: Scope & Hoisting

Understanding scope, hoisting, and closures is crucial for writing robust and bug-free JavaScript. These concepts control the visibility and lifetime of variables.

## 📖 Concepts

### Scope: Global vs Function vs Block
- **Global Scope**: Variables declared outside of any function are accessible everywhere.
- **Function Scope**: Variables declared with `var` inside a function are only visible within that function.
- **Block Scope**: Variables declared with `let` and `const` inside `{ }` blocks (like an `if` statement or `for` loop) are only visible within that block.

### `var` vs `let` / `const`
`var` is function-scoped, while `let` and `const` are block-scoped. Additionally, `let` and `const` are subject to the **Temporal Dead Zone (TDZ)**, meaning you cannot access them before their declaration line is executed.

### Hoisting
In JavaScript, variable and function declarations are conceptually moved ("hoisted") to the top of their enclosing scope.
- **Function declarations** are fully hoisted (you can call them before they appear in code).
- **`var` declarations** are hoisted, but initialized with `undefined`.
```javascript
console.log(myVar); // undefined
var myVar = 10;
```

### Closures
A closure is created when a function "remembers" the variables in its outer lexical scope, even after the outer function has returned. This is incredibly powerful for creating private data!
```javascript
function makeSecret(secret) {
  return function() {
    return `The secret is: ${secret}`; // Has access to `secret` via closure
  };
}
```

### The Classic Loop Closure Problem
When using `var` inside a loop with asynchronous code or closures, the closures all share the same `var` binding. Using `let` fixes this by creating a new binding for every loop iteration.

## ✏️ Instructions

1. Open `solution.js`.
2. Implement `createCounter` to return an object utilizing a closure for the count.
3. Implement `makePrivate` to encapsulate a variable with getter/setter.
4. Fix `blockScopeDemo` by declaring a block-scoped `innerVar` in the `if` block.
5. Implement `createIdGenerator` which returns an ID-generating function.
6. Fix/Implement `loopWithClosure` using a `for` loop and `let` so that each function returns its correct index.

To check your work, run:
```bash
npm run check:task 10
```

## 💡 Hints
- In `createCounter`, the object you return needs access to a variable declared *outside* the object but *inside* the outer function.
- In `loopWithClosure`, simply using `let i = 0` in your `for` loop is enough to fix the classic closure problem.
