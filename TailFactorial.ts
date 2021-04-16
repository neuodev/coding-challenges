function tailFactorial(x: number, totalSofar: number = 1) {
  if (x == 0) return totalSofar;
  return tailFactorial(x - 1, totalSofar * x);
}

console.log(tailFactorial(4));
console.log(tailFactorial(1));
console.log(tailFactorial(0));
