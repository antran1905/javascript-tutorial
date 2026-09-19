function uniqueValues(arr) {

  // TODO: Use Set to return array of unique values: [1,2,2,3] -> [1,2,3]
  return [...new Set(arr)];

}

function setOperations(arr1, arr2) {

  // TODO: Return { union: [...], intersection: [...], difference: [...] }

  // Union = all unique from both. Intersection = in both. Difference = in arr1 but not arr2.
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  return {
    union: [...new Set([...arr1, ...arr2])],
    intersection: [...set1].filter(x => set2.has(x)),
    difference: [...set1].filter(x => !set2.has(x))
  };

}

function countOccurrences(arr) {

  // TODO: Use Map to count each item. Return a Map. E.g. ['a','b','a'] -> Map { 'a' => 2, 'b' => 1 }
  const map = new Map();

  arr.forEach(item => {
    map.set(item, (map.get(item) || 0) + 1);
  });

  return map;

}

function groupBy(arr, keyFn) {

  // TODO: Group items by keyFn result using Map. 

  // E.g. groupBy([1,2,3,4,5], n => n % 2 === 0 ? 'even' : 'odd') -> Map { 'odd' => [1,3,5], 'even' => [2,4] }
  const map = new Map();

  arr.forEach(item => {
    const key = keyFn(item);
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(item);
  });

  return map;

}

function mapToObject(map) {

  // TODO: Convert a Map to a plain object
  return Object.fromEntries(map);

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
