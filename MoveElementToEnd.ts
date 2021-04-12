moveToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2);

function moveToEnd(array: number[], num: number) {
  let pointer = 0;
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    if (current !== num) {
      swap(pointer, i, array);
      pointer++;
    }
  }
  return array;
}

function swap(j: number, i: number, array: number[]) {
  let temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}
