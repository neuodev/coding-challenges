function BindarySearchItrative(array: number[], target: number) {
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

