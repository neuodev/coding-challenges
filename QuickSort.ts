function partition(array: number[], idx: number) {
  let j = -1;
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    let pivot = array[idx];
    if (current < pivot) {
      j++;
      swap(j, i, array);
    }
  }

  console.log(array);
}

function swap(j: number, i: number, array: number[]) {
  [array[j], array[i]] = [array[i], array[j]];
}

partition([1, 2, 5, 6, 4, 2], 3);
