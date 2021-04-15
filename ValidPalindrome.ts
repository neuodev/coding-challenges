function isPalindrome(string: string) {
  let newString = string.toLocaleLowerCase().replace(/[^A-Za-z0-9]/g, '');
  let left = 0,
    right = newString.length - 1;
  while (left < right) {
    if (newString[left] !== newString[right]) return false;
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome('A man, a plan, a canal: Panama'));
// console.log(isPalindrome('aba'));
