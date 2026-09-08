# Task 24: JSON

JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write, and easy for machines to parse and generate. JSON is derived from JavaScript object syntax, but is completely language-independent. It is heavily used in web development for sending and receiving data between a client (like a web browser) and a server.

## Converting Objects to JSON (`JSON.stringify`)
To convert a JavaScript object or array into a JSON string, use `JSON.stringify()`:
```javascript
const user = { name: "Alice", age: 30, isActive: true };
const jsonStr = JSON.stringify(user);
// '{"name":"Alice","age":30,"isActive":true}'
```

You can pretty-print the JSON output by passing two additional arguments: a replacer (usually `null` if not used) and a space count (e.g., `2`):
```javascript
const prettyJsonStr = JSON.stringify(user, null, 2);
/*
{
  "name": "Alice",
  "age": 30,
  "isActive": true
}
*/
```

A replacer can also be an array of keys you want to include, or a function that transforms the values before stringifying:
```javascript
JSON.stringify(user, ["name"]); // '{"name":"Alice"}'
```

## Parsing JSON (`JSON.parse`)
To convert a JSON string back into a JavaScript object, use `JSON.parse()`:
```javascript
const jsonStr = '{"name":"Bob","age":25}';
const obj = JSON.parse(jsonStr);
console.log(obj.name); // "Bob"
```

**Error Handling**: If you try to parse an invalid JSON string, `JSON.parse()` will throw a `SyntaxError`. Therefore, it's a good practice to wrap it in a `try...catch` block, especially when parsing data from an external source.

```javascript
try {
  const data = JSON.parse('{"invalid: json');
} catch (error) {
  console.error("Failed to parse JSON!");
}
```

## JSON Limitations
JSON only supports strings, numbers, booleans, `null`, arrays, and objects. It does not support:
- Functions (they are omitted during stringification)
- `undefined` (omitted if it's an object property; converted to `null` if it's in an array)
- Dates (they are converted to strings via their `.toISOString()` method)
- Circular references (throws an error)

## Instructions

Implement the following functions in `solution.js`:

1.  **`toJSON(value)`**
    Convert the given `value` to a JSON string using `JSON.stringify()` and return the result.
2.  **`fromJSON(jsonStr)`**
    Parse the given JSON string `jsonStr`.
    - If successful, return an object: `{ success: true, data: <parsed_data> }`.
    - If it throws an error (e.g., invalid JSON), catch it and return: `{ success: false, error: error.message }`.
3.  **`deepClone(obj)`**
    Perform a deep clone of the object `obj` by first stringifying it to JSON, and then parsing that JSON string back to an object. Return the cloned object.
4.  **`prettyPrint(obj)`**
    Return a JSON string representation of `obj` with a 2-space indentation.
5.  **`filterAndStringify(obj, allowedKeys)`**
    Stringify the object `obj`, but only include properties whose keys are in the `allowedKeys` array. Use the replacer argument of `JSON.stringify`.
6.  **`safeJsonParse(jsonStr, defaultValue)`**
    Attempt to parse `jsonStr`. If successful, return the parsed object. If parsing fails, return `defaultValue`.

## Hints
- `try...catch` blocks are essential for functions that parse JSON.
- `JSON.parse(JSON.stringify(obj))` is a common (though slightly limited) way to deep clone objects without writing a complex recursive function.

Run your code to check your solution:
```bash
npm run check:task 24
```
