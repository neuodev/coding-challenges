
// O(log(n)) time | O(1) for space 
function binarySearchItrative(array: number[], target: number) {
  let L = 0;
  let R = array.length - 1;
  while (L <= R) {
    let middle = Math.floor((L + R) / 2);
    let match = array[middle];
    if (target == match) {
      return middle;
    } else if (target < match) {
      R = middle - 1;
    } else {
      L = middle + 1;
    }
  }
  return -1;
}

// O(log(n)) time | O(log(n)) for space 

function binarySearchRecursive(array: number[], target: number) {
  return binarySearchHelper(array, target, 0, array.length);
}

function binarySearchHelper(
  array: number[],
  target: number,
  left: number,
  right: number
) {
  // base case
  if (left > right) return -1;
  let middle = Math.floor((left + right) / 2);
  let elMatch = array[middle];
  if (elMatch === target) {
    return middle;
  } else if (target < elMatch) {
    return binarySearchHelper(array, target, left, middle - 1);
  } else {
    return binarySearchHelper(array, target, middle + 1, right);
  }
}

console.log(binarySearchRecursive([1, 2, 3, 4, 5], 3));
