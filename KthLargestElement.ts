function kthLargestElement(array: number[], target: number): number {
  array = array.sort((a, b) => a - b);

  let idx = array.length - target;

  return array[idx];
}

console.log(kthLargestElement([2, 3, 1, 2, 4, 2], 4));
console.log(kthLargestElement([5, 3, 1, 6, 4, 2], 2));
// [1,2,2,2,3,4]
