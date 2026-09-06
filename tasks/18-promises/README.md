# Task 18: Promises

In this task, we'll dive into **Promises**, the modern JavaScript standard for handling asynchronous operations.

## 📖 Concepts

### What is a Promise?
A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. It can be in one of three states:
- **Pending**: Initial state, neither fulfilled nor rejected.
- **Fulfilled (Resolved)**: The operation completed successfully.
- **Rejected**: The operation failed.

### Creating Promises
You create a Promise using the `new Promise` constructor, passing an executor function with `resolve` and `reject` callbacks.

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("Operation successful!");
    } else {
      reject(new Error("Operation failed!"));
    }
  }, 1000);
});
```

### Consuming Promises and Chaining
You interact with Promises using `.then()` for successes, `.catch()` for errors, and `.finally()` for cleanup. Since `.then()` and `.catch()` return Promises themselves, they can be chained.

```javascript
fetchData()
  .then(data => processData(data)) // Returns a new promise
  .then(processedData => console.log(processedData))
  .catch(error => console.error("Caught error:", error))
  .finally(() => console.log("Done."));
```

### Helper Methods
- `Promise.resolve(value)`: Returns a Promise immediately resolved with `value`.
- `Promise.reject(error)`: Returns a Promise immediately rejected with `error`.

### Promise Combinators
- **`Promise.all([p1, p2])`**: Waits for all promises to resolve. If one fails, the whole `Promise.all` fails immediately (fails fast).
- **`Promise.race([p1, p2])`**: Returns a promise that fulfills or rejects as soon as the first promise in the iterable fulfills or rejects.

```javascript
const p1 = Promise.resolve("One");
const p2 = Promise.resolve("Two");

Promise.all([p1, p2]).then(results => {
  console.log(results); // ["One", "Two"]
});

const slow = new Promise(r => setTimeout(r, 500, "Slow"));
const fast = new Promise(r => setTimeout(r, 100, "Fast"));

Promise.race([slow, fast]).then(winner => {
  console.log(winner); // "Fast"
});
```

### Wrapping setTimeout
A very common pattern is wrapping the callback-based `setTimeout` inside a Promise to make it compatible with modern asynchronous code.

## ✏️ Instructions

Open `solution.js` and implement the following functions:

1.  **delay**: Return a Promise that resolves after `ms` milliseconds using `setTimeout`.
2.  **fetchData**: If `shouldSucceed` is true, resolve with `{ data: 'Success!' }` after 100ms. Else, reject with `new Error('Failed to fetch')` after 100ms.
3.  **chainPromises**: Start with `Promise.resolve(initial)`. Use `.reduce` to chain each function in the `fns` array using `.then()`. Return the final promise.
4.  **promiseAll**: Implement the logic of `Promise.all` from scratch. You take an array of promises, and you must return a single promise that resolves to an array of results, or rejects on the first failure. DO NOT use the built-in `Promise.all`.
5.  **timeout**: Race the given `promise` against a timeout promise (which rejects after `ms`). Use `Promise.race`.

## 💡 Hints

- For `promiseAll`, create a new Promise. Maintain a results array and a `completedCount`. Loop through the input promises, attaching `.then()` and `.catch()` to each. When all have completed, resolve with the array. If any rejects, reject the main promise.
- For `timeout`, use your `delay` function or create an inline timeout promise that rejects, and pass both it and the original promise into `Promise.race()`.
- For `chainPromises`, remember that array `.reduce` is perfect for sequentially building up a chain of `.then()` calls.

To test your implementation, run:

```bash
npm run check:task 18
```
