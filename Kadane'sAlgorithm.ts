// O(n) time | O(1) space

function findSumMax(array: number[]) {
  let maxSoFar = 0;
  let maxEndingHere = 0;
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    maxEndingHere = Math.max(current, maxEndingHere + current);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
}
findSumMax([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]);
