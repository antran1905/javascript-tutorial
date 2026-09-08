# Task 27: Sets & Maps

JavaScript provides two powerful collection types: `Set` and `Map`. These data structures offer specific advantages over standard Objects and Arrays in many scenarios.

## Set

A `Set` is a collection of unique values of any type. Duplicate values are automatically removed.

```javascript
const mySet = new Set([1, 2, 2, 3]); // Set(3) {1, 2, 3}

// Methods and Properties
mySet.add(4);      // Add an item
mySet.delete(2);   // Remove an item
mySet.has(1);      // Check if item exists (returns true/false)
mySet.size;        // Get number of items
mySet.clear();     // Remove all items
```

### Set Iteration
You can iterate over a Set using `for...of`, `forEach`, or convert it to an array.
```javascript
for (const item of mySet) {
  console.log(item);
}
const arrayFromSet = [...mySet];
```

## Map

A `Map` is a collection of keyed data items, similar to an Object. But the main difference is that `Map` allows keys of any type, maintains insertion order, and has a built-in `size` property.

```javascript
const map = new Map();
map.set('name', 'John');
map.set(1, 'number key');
map.set(true, 'boolean key');

// Methods and Properties
map.get(1);        // Get value by key
map.has('name');   // Check if key exists
map.delete(true);  // Remove item by key
map.size;          // Get number of items
map.clear();       // Remove all items
```

### Map vs Object
- **Keys**: Map keys can be of any type, while Object keys must be strings or symbols.
- **Order**: Map maintains insertion order, Object order can be less predictable.
- **Size**: Map has a `size` property, Object does not (requires `Object.keys(obj).length`).

### Map Iteration and Conversion
```javascript
for (const [key, value] of map) {
  console.log(key, value);
}

// Convert Map to Object (if keys are strings/symbols)
const obj = Object.fromEntries(map);

// Convert Object to Map
const newMap = new Map(Object.entries(obj));
```

## Instructions

Implement the following functions in `solution.js`:
1. `uniqueValues(arr)`
2. `setOperations(arr1, arr2)`
3. `countOccurrences(arr)`
4. `groupBy(arr, keyFn)`
5. `mapToObject(map)`
6. `objectToMap(obj)`

## Run Tests
Run the tests to check your implementation:
```bash
npm run check:task 27
```
