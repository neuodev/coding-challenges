function productSum(array: any, M: number) {
  let sum = 0;
  for (const element of array) {
    if (typeof element === 'object') {
      sum += productSum(element, M + 1);
    } else {
      sum += element;
    }
  }
  return sum * M;
}

console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]], 1));
