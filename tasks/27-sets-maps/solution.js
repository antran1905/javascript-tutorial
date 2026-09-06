function uniqueValues(arr) {
  // TODO: Use Set to return array of unique values: [1,2,2,3] -> [1,2,3]
}

function setOperations(arr1, arr2) {
  // TODO: Return { union: [...], intersection: [...], difference: [...] }
  // Union = all unique from both. Intersection = in both. Difference = in arr1 but not arr2.
}

function countOccurrences(arr) {
  // TODO: Use Map to count each item. Return a Map. E.g. ['a','b','a'] -> Map { 'a' => 2, 'b' => 1 }
}

function groupBy(arr, keyFn) {
  // TODO: Group items by keyFn result using Map. 
  // E.g. groupBy([1,2,3,4,5], n => n % 2 === 0 ? 'even' : 'odd') -> Map { 'odd' => [1,3,5], 'even' => [2,4] }
}

function mapToObject(map) {
  // TODO: Convert a Map to a plain object
}

function objectToMap(obj) {
  // TODO: Convert a plain object to a Map
}

module.exports = {
  uniqueValues,
  setOperations,
  countOccurrences,
  groupBy,
  mapToObject,
  objectToMap
};
