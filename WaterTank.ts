// p1 -> left
// p2 -> right
// area = min(left , right) * (I(p2) - I(p1))
function maxAreaContainer(array: number[]) {
  let maxArea = 0;
  for (let p1 = 0; p1 < array.length; p1++) {
    const left = array[p1];
    for (let p2 = p1 + 1; p2 < array.length; p2++) {
      const right = array[p2];

      const currentArea = Math.min(left, right) * (p2 - p1);
      if (currentArea > maxArea) maxArea = currentArea;
    }
  }

  return maxArea;
}

console.log(maxAreaContainer([7, 1, 2, 3, 9]));
