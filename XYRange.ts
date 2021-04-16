function XYRange(array: number[], target: number) {
  if (array.length === 0) return -1;
  let numIdx = binarySearch(array, target, 0, array.length - 1);
  if (numIdx == -1) return numIdx;
  let upperBound = numIdx;
  let lowerBound = numIdx;
  let temp1, temp2;
  while (lowerBound !== -1) {
    temp1 = lowerBound;
    lowerBound = binarySearch(array, target, 0, lowerBound - 1);
  }
  lowerBound = temp1;

  while (upperBound !== -1) {
    temp2 = upperBound;
    upperBound = binarySearch(array, target, upperBound + 1, array.length - 1);
  }
  upperBound = temp2;
  return [lowerBound, upperBound];
}

function binarySearch(array: number[], target: number, L: number, R: number) {
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

console.log(XYRange([1, 3, 3, 5, 5, 5, 8, 9], 5));
