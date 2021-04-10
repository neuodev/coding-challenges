function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let smallest = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[smallest]) {
        smallest = j;
      }
    }
    swap(i, smallest, array);
  }
  console.log(array);
}

function swap(j, i, array) {
  [array[i], array[j]] = [array[j], array[i]];
}

selectionSort([8, 5, 2, 9, 5, 6, 3]);
