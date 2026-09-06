# Task 13: Destructuring

Welcome to Task 13! Destructuring assignment is a special syntax that allows you to "unpack" arrays or objects into a bunch of variables. This makes extracting data much more concise and readable.

## 📖 Concepts

### Array Destructuring

Extract values from an array by their position.

```javascript
const colors = ['red', 'green', 'blue'];

// Without destructuring
// const first = colors[0];
// const second = colors[1];

// With destructuring
const [first, second] = colors;
console.log(first, second); // 'red', 'green'
```

You can skip items by leaving an empty slot: `const [, , third] = colors;`

### Object Destructuring

Extract values from an object by their property name. The order doesn't matter.

```javascript
const person = { name: 'Alice', age: 25, city: 'Paris' };

const { name, age } = person;
console.log(name, age); // 'Alice', 25
```

### Default Values and Renaming

You can provide default values if the property is undefined. You can also assign a property to a variable with a different name using `key: newName`.

```javascript
const options = { title: 'Menu' };

// Default value
const { width = 100 } = options; 

// Renaming
const { title: heading } = options;

// Both renaming and default value
const { color: btnColor = 'blue' } = options;
```

### Nested Destructuring

You can destructure nested arrays and objects to extract deeply nested properties.

```javascript
const user = {
  id: 1,
  profile: { username: 'alice123', location: 'UK' }
};

const { profile: { username, location } } = user;
console.log(username); // 'alice123'
```

### Rest in Destructuring and Swapping

Use the rest pattern (`...`) to collect the remaining elements. Destructuring is also an easy way to swap variables without a temporary variable!

```javascript
// Rest pattern
const [head, ...tail] = [1, 2, 3, 4]; // tail is [2, 3, 4]

// Swapping
let a = 1, b = 2;
[a, b] = [b, a]; // a=2, b=1
```

### Function Parameter Destructuring

You can destructure objects right inside function parameters.

```javascript
function printUser({ name, age }) {
  console.log(`${name} is ${age} years old`);
}
printUser({ name: 'Bob', age: 40 });
```

## ✏️ Instructions

Open `solution.js` and implement the following functions using destructuring:
1. `getFirstTwo(arr)`: Return an object `{ first, second }` containing the first two array elements.
2. `swapValues(a, b)`: Swap the two arguments and return an array `[b, a]`.
3. `extractName(user)`: Given `{ name: { first, last }, age }`, return the full name string `'first last'`.
4. `withDefaults(options)`: Accept an options object, apply defaults (`color = 'blue'`, `size = 'medium'`, `count = 1`), and return the resulting complete object.
5. `getScores(student)`: Given `{ name, scores: [math, english, science] }`, unpack the array into individual properties and return `{ name, math, english, science }`.

## 💡 Hints

- When extracting nested properties, you only define variables for the innermost properties unless you explicitly declare the parent as well.
- In `withDefaults`, you can destructure the parameter directly in the function signature: `function withDefaults({ color = 'blue', ... })`.
- Try to use destructuring in the function parameters where applicable to make your code cleaner!

When you are ready, check your solution by running:
```bash
npm run check:task 13
```
