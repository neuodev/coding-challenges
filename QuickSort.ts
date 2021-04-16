console.log(quickSort([15, 6, 3, 1, 22, 10, 13]));
function quickSort(array: number[]) {
  return _qickSortRec(array, 0, array.length - 1);
}

function _qickSortRec(array: number[], start: number, end: number) {
  if (start >= end) return;
  let boundary = partition(array, start, end);
  _qickSortRec(array, start, boundary - 1);
  _qickSortRec(array, boundary + 1, end);
  return array;
}

function partition(array: number[], start: number, end: number) {
  let pivot = end;
  let boundary = start - 1;
  for (let i = start; i <= end; i++) {
    const current = array[i];
    if (current <= array[pivot]) {
      swap(++boundary, i, array);
    }
  }

  return boundary;
}

function swap(j: number, i: number, array: number[]) {
  [array[j], array[i]] = [array[i], array[j]];
}

partition([1, 2, 5, 6, 4, 2], 0, 5);
