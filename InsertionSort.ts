// O(n^2) time | O(1) space 
function insetionSort(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      swap(j, j - 1, array);
      j--;
    }
  }

  return array;
}

function swap(j: number, i: number, array: number[]) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

insetionSort([1, 9, 3, 4]);
