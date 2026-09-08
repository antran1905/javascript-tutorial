# Task 17: Closures

In this task, we will master **closures**, one of the most powerful and fundamental concepts in JavaScript.

## 📖 Concepts

### What is a Closure?
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives an inner function access to an outer function's scope, even after the outer function has finished executing.

```javascript
function createGreeting(greeting) {
  // This inner function forms a closure
  // It "remembers" the 'greeting' variable
  return function(name) {
    return `${greeting}, ${name}!`;
  }
}

const sayHello = createGreeting("Hello");
console.log(sayHello("Alice")); // "Hello, Alice!"
```

### Data Privacy and Encapsulation
Closures are commonly used to create private variables. Because variables in the outer function cannot be accessed directly from the outside, they remain completely private to the inner functions.

```javascript
function createSecretHolder(secret) {
  return {
    getSecret: () => secret,
    setSecret: (newSecret) => { secret = newSecret; }
  };
}

const holder = createSecretHolder("my password");
console.log(holder.getSecret()); // "my password"
// 'secret' is inaccessible directly!
```

### The Factory Function Pattern
Factory functions return objects. Combined with closures, they allow you to create multiple independent instances of stateful objects.

```javascript
function createIdGenerator(prefix) {
  let count = 0;
  return function() {
    count++;
    return `${prefix}-${count}`;
  };
}

const userIds = createIdGenerator("USER");
console.log(userIds()); // "USER-1"
console.log(userIds()); // "USER-2"
```

### Advanced Patterns
**The `once` pattern**: A function that ensures an operation is only executed exactly one time.

```javascript
function initializeOnce(initFn) {
  let executed = false;
  let result;
  
  return function(...args) {
    if (!executed) {
      result = initFn(...args);
      executed = true;
    }
    return result;
  };
}
```

**Function Composition / Pipe**: Combining multiple functions into a single pipeline where the output of one becomes the input of the next. This utilizes closures to remember the sequence of functions.

**Memoization / Caching**: Using a closure to store the results of expensive function calls and returning the cached result when the same inputs occur again.

## ✏️ Instructions

Open `solution.js` and implement the following functions using closures:

1.  **createCounter**: Return an object with methods `increment()`, `decrement()`, `getCount()`, and `reset()`. The counter should start at the provided `initial` value.
2.  **createCache**: Return an object with `get(key)`, `set(key, value)`, `has(key)`, and `clear()`. The cache storage must be completely private.
3.  **once**: Takes a function `fn`. Returns a new function that runs `fn` only the first time it is called. On subsequent calls, it should return the cached result of that first execution without calling `fn` again.
4.  **createRateLimiter**: Takes `maxCalls` and `timeWindowMs`. Returns a function that tracks how many times it was called. If called more than `maxCalls` times within the `timeWindowMs`, it should throw an `Error`.
5.  **pipe**: Takes any number of functions. Returns a new function that accepts an argument and pipes it through all the functions from left to right.

## 💡 Hints

- For `createCounter` and `createCache`, define variables inside the main function, and return an object literal containing methods that manipulate those variables.
- For `once`, you'll need variables to track whether the function has run (`boolean`) and the result of that run.
- For `createRateLimiter`, you need an array to store timestamps of calls. Filter out timestamps older than the time window before checking the array length.
- For `pipe`, you can use `Array.prototype.reduce` on the array of functions to apply them sequentially.

To test your implementation, run:

```bash
npm run check:task 17
```
