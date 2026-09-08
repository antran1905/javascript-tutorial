# Task 26: The `this` Keyword

In JavaScript, the `this` keyword refers to an object. Which object depends on how `this` is being invoked (used or called).

The `this` keyword behaves differently compared to other languages and can be a common source of confusion.

## How `this` works

1. **In an object method**, `this` refers to the object.
```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
```

2. **Alone** (in the global context), `this` refers to the global object (e.g., `window` in a browser).

3. **In a regular function**, `this` refers to the global object. In strict mode (`"use strict"`), `this` is `undefined`.

4. **In an event**, `this` refers to the element that received the event.

5. **Methods like `call()`, `apply()`, and `bind()`** can refer `this` to any object.

## Arrow Functions

Arrow functions do not have their own `this`. They inherit `this` from the parent scope (lexical scoping) at the time they are defined.
This makes arrow functions particularly useful for callbacks.

```javascript
const obj = {
  name: 'Alice',
  regularFunction: function() {
    setTimeout(function() {
      console.log(this.name); // undefined (or error in strict mode)
    }, 1000);
  },
  arrowFunction: function() {
    setTimeout(() => {
      console.log(this.name); // 'Alice'
    }, 1000);
  }
};
```

## Explicit Binding

- `call()`: Calls a function with a given `this` value and arguments provided individually.
- `apply()`: Calls a function with a given `this` value, and arguments provided as an array.
- `bind()`: Creates a new function that, when called, has its `this` keyword set to the provided value.

```javascript
function greet(greeting) {
  console.log(greeting + ', ' + this.name);
}
const user = { name: 'Bob' };

greet.call(user, 'Hello'); // Hello, Bob
greet.apply(user, ['Hi']); // Hi, Bob
const boundGreet = greet.bind(user);
boundGreet('Hey'); // Hey, Bob
```

## Instructions

Implement the following functions in `solution.js`:
1. `createGreeter(name)`
2. `fixThis(obj, methodName)`
3. `callWithContext(fn, context, ...args)`
4. `applyWithContext(fn, context, args)`
5. `createTimer(label)`

## Run Tests
Run the tests to check your implementation:
```bash
npm run check:task 26
```
