function bubbleSort(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    let isSwap = false;
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        swap(j, j + 1, array);
        isSwap = true;
      }
    }
    if (!isSwap) break;
  }

  console.log(array);
  return array;
}

function swap(i: number, j: number, array: number[]) {
  [array[i], array[j]] = [array[j], array[i]];
}

bubbleSort([100, 19, 3, 8]);
