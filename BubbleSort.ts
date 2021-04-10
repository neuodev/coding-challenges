function bubbleSort(array: number[]) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    let isSwap = false;
    for (let j = 0; j < array.length - 1 - counter; j++) {
      if (array[j] > array[j + 1]) {
        swap(j, j + 1, array);
        isSwap = true;
      }
    }
    counter++;
    if (!isSwap) break;
  }

  console.log(array);
  return array;
}

function swap(i: number, j: number, array: number[]) {
  [array[i], array[j]] = [array[j], array[i]];
}

bubbleSort([100, 19, 3, 8]);
