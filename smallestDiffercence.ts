function smallestDiff(arr1: number[], arr2: number[]) {
  arr1 = arr1.sort((a: number, b: number) => a - b);
  arr2 = arr2.sort((a: number, b: number) => a - b);
  let p1 = 0;
  let p2 = 0;
  let smallest = Infinity;
  let right = arr1[0];
  let left = arr2[0];
  while (p1 < arr1.length && p2 < arr2.length) {
    let first = arr1[p1];
    let second = arr2[p2];
    let diff = Math.abs(first - second);

    if (diff < smallest) {
      smallest = diff;
      left = first;
      right = second;
    }
    first < second ? p1++ : p2++;
  }

  return [right, left];
}
console.log(smallestDiff([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]));
