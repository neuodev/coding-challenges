// [1,3,7,9,2] , 11
// return vlaue of [3,4]

// Itrative
function towSumIterative(array: number[], target) {
  for (let p1 = 0; p1 < array.length; p1++) {
    const element1 = array[p1];
    for (let p2 = p1; p2 < array.length; p2++) {
      const element2 = array[p2];
      if (element1 + element2 === target) return [p1, p2];
    }
  }

  return null;
}

console.log(towSumIterative([1, 3, 7, 9, 2], 5));
