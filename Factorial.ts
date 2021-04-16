function calcFactorial(x: number) {
  if (x <= 1) return 1;
  return x * calcFactorial(x - 1);
}

calcFactorial(6);
