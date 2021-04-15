console.log(backspace('abc#d', 'abzz##d'));
console.log(backspace('abd', 'abd'));

function backspace(S: string, T: string) {
  let p1 = S.length - 1;
  let p2 = S.length - 1;
  while (p1 >= 0 || p2 >= 0) {
    if (S[p1] === '#' || T[p2] === '#') {
      if (S[p1] === '#') {
        p1 = goBack(S, p1);
      }
      if (T[p2] === '#') {
        p2 = goBack(T, p2);
      }
    } else {
      if (S[p1] !== T[p2]) return false;
      else {
        p1--;
        p2--;
      }
    }
  }

  return true;
}

function goBack(str: string, p: number) {
  let stepsToTake = 2;
  while (stepsToTake > 0) {
    stepsToTake--;
    p--;
    if (str[p] === '#') stepsToTake += 2;
  }
  return p;
}
