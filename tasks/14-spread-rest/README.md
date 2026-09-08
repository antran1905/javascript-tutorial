# Task 14: Spread & Rest

Welcome to Task 14! The syntax `...` acts as either a **spread** syntax or **rest** syntax depending on where it is used. They are incredibly useful for copying data, merging arrays/objects, and writing flexible functions.

## 📖 Concepts

### The Golden Rule
- **Spread expands**: It takes an iterable (like an array or object) and expands it into individual elements.
- **Rest collects**: It gathers multiple elements and condenses them into a single array or object.

### Spread in Arrays

Use spread to copy arrays or combine them.

```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];

// Combine arrays
const merged = [...arr1, ...arr2]; // [1, 2, 3, 4]

// Shallow clone
const cloned = [...arr1]; 
```

### Spread in Objects

Use spread to copy objects or merge them. Properties defined later in the spread order will overwrite earlier ones if there are conflicts.

```javascript
const defaults = { theme: 'light', showSidebar: true };
const userPrefs = { theme: 'dark' };

// Merge objects (userPrefs overrides defaults)
const settings = { ...defaults, ...userPrefs }; 
// { theme: 'dark', showSidebar: true }

// Shallow clone
const copy = { ...settings };
```

### Rest Parameters in Functions

Rest allows a function to accept an indefinite number of arguments as an array. It must be the last parameter.

```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

sum(1, 2, 3, 4); // 10
```

### Rest in Destructuring

You can use the rest syntax to collect remaining properties when destructuring an object or array.

```javascript
const { name, ...otherDetails } = { name: 'Alice', age: 25, city: 'Paris' };
// name = 'Alice'
// otherDetails = { age: 25, city: 'Paris' }

// You can use this pattern to remove a property
const removeAge = (user) => {
  const { age, ...keptProperties } = user;
  return keptProperties;
};
```

## ✏️ Instructions

Open `solution.js` and implement the following functions using spread and rest syntax:
1. `mergeArrays(arr1, arr2)`: Use spread to return a new array combining both.
2. `cloneObject(obj)`: Use spread to return a shallow copy of the object.
3. `addDefaults(obj, defaults)`: Merge the `defaults` object with `obj`. Properties in `obj` must take precedence.
4. `firstAndRest(arr)`: Use rest syntax with array destructuring to return an object `{ first, rest }`.
5. `maxOfAll(...numbers)`: Accept any number of arguments. Use `Math.max()` to return the maximum value. (Hint: `Math.max` takes individual numbers, so you might need to spread the rest array into it).
6. `removeProperty(obj, prop)`: Return a new object with the specified property string `prop` removed.

## 💡 Hints

- To remove a dynamic property name using destructuring, you can use computed property names: `const { [propName]: removedValue, ...rest } = obj`.
- `Math.max(...[1, 2, 3])` expands the array into separate arguments for the `Math.max` function.
- Remember that `...` on the left side of `=` is usually Rest, and on the right side it's Spread!

When you are ready, check your solution by running:
```bash
npm run check:task 14
```
