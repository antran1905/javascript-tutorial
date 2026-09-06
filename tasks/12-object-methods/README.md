# Task 12: Object Methods

Welcome to Task 12! In this task, you will explore built-in methods for working with JavaScript objects. These methods are essential for iterating over objects, extracting keys and values, and transforming object structures.

## 📖 Concepts

While arrays have methods like `.map` and `.filter`, objects are technically not iterable in the same way. However, we can use static methods on the `Object` class to work with them efficiently.

### Keys, Values, and Entries

- **`Object.keys(obj)`**: Returns an array of the object's property names (keys).
- **`Object.values(obj)`**: Returns an array of the object's property values.
- **`Object.entries(obj)`**: Returns an array of `[key, value]` pairs.
- **`Object.fromEntries(pairs)`**: Converts an array of `[key, value]` pairs back into an object.

```javascript
const user = { name: 'Alice', age: 30 };

Object.keys(user);   // ['name', 'age']
Object.values(user); // ['Alice', 30]
Object.entries(user);// [['name', 'Alice'], ['age', 30]]

const pairs = [['color', 'red'], ['size', 'L']];
Object.fromEntries(pairs); // { color: 'red', size: 'L' }
```

### Merging Objects

- **`Object.assign(target, ...sources)`**: Copies all enumerable properties from one or more source objects to a target object. It returns the modified target object.

```javascript
const target = { a: 1 };
const source = { b: 2, c: 3 };

Object.assign(target, source); 
// target is now { a: 1, b: 2, c: 3 }
```

### Iterating Over Objects

You can iterate over objects using `for...in` loops, but a common and powerful functional approach is combining `Object.keys()` or `Object.entries()` with array methods like `.forEach()`, `.map()`, or `.filter()`.

```javascript
const scores = { math: 90, english: 85 };

// Using for...in
for (const subject in scores) {
  console.log(`${subject}: ${scores[subject]}`);
}

// Using Object.entries and forEach
Object.entries(scores).forEach(([subject, score]) => {
  console.log(`${subject}: ${score}`);
});
```

### Building New Objects

By combining `Object.entries()`, array methods, and `Object.fromEntries()`, you can effectively `.map()` or `.filter()` objects!

```javascript
const salaries = { john: 100, pete: 300, mary: 250 };

// Double all salaries
const doubled = Object.fromEntries(
  Object.entries(salaries).map(([name, amount]) => [name, amount * 2])
);
// { john: 200, pete: 600, mary: 500 }
```

## ✏️ Instructions

Open `solution.js` and implement the following functions:
1. `getPropertyNames(obj)`: Return an array of the object's keys.
2. `getPropertyValues(obj)`: Return an array of the object's values.
3. `toPairs(obj)`: Return an array of `[key, value]` pairs.
4. `fromPairs(pairs)`: Convert an array of `[key, value]` pairs back to an object.
5. `pick(obj, keys)`: Return a new object containing only the properties listed in the `keys` array.
6. `invert(obj)`: Return a new object where the keys become values and the values become keys. (Assume values are primitive and unique strings/numbers).

## 💡 Hints

- For `pick(obj, keys)`, consider using `reduce` on the `keys` array, or filter `Object.entries(obj)` and then use `Object.fromEntries()`.
- For `invert(obj)`, `Object.entries()` combined with `.map()` to swap the tuple before calling `Object.fromEntries()` is a clean approach.
- Don't mutate the original object in `pick` and `invert`.

When you are ready, check your solution by running:
```bash
npm run check:task 12
```
