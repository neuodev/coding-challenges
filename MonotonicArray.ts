/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
  if (A[0] < A[A.length - 1]) {
    for (let i = 0; i < A.length - 1; i++) {
      console.log(A[i], A[i + 1]);
      if (!(A[i] <= A[i + 1])) return false;
    }
  } else {
    for (let i = 0; i < A.length - 1; i++) {
      if (!(A[i] >= A[i + 1])) return false;
    }
  }

  return true;
};
