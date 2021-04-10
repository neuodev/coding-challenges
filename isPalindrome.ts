/**
 * @param {string} x
 * @return {boolean}
 */
var isPalindrome = function (x: string) {
  x = x.toString();
  let left = 0;
  let right = x.length - 1;
  while (left <= right) {
    if (x[left] !== x[right]) return false;
    left++;
    right--;
  }
  return true;
};
