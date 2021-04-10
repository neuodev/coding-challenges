
// O(log(n)) time | O(1) for space 
function bindarySearchItrative(array: number[], target: number) {
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

function bindarySearchRecursive(array: number[], target: number) {
  return bindarySearchHelper(array, target, 0, array.length);
}

function bindarySearchHelper(
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
    return bindarySearchHelper(array, target, left, middle - 1);
  } else {
    return bindarySearchHelper(array, target, middle + 1, right);
  }
}

console.log(bindarySearchRecursive([1, 2, 3, 4, 5], 3));
