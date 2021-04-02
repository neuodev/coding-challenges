// [1,3,7,9,2] , 11
// return vlaue of [3,4]

// Itrative
// time: O(n^2)
// space: O(1)
function towSumIterative(array: number[], target: number) {
  for (let p1 = 0; p1 < array.length; p1++) {
    const element1 = array[p1];
    for (let p2 = p1; p2 < array.length; p2++) {
      const element2 = array[p2];
      if (element1 + element2 === target) return [p1, p2];
    }
  }

  return null;
}

console.log(towSumIterative([1, 3, 7, 9, 2], 5));

// Using Hash Table
// time: O(n)
// space: O(n) -> due to hash table 
function twoSumHash(array: number[], target: number) {
  let hashTable = {};

  for (let p = 0; p < array.length; p++) {
    const element = array[p];

    if (hashTable[element] >= 0) return [hashTable[element], p];

    let numberToFind = target - element;
    hashTable[numberToFind] = p;
  }

  return null;
}

console.log(twoSumHash([1, 3, 7, 9, 2], 11));
