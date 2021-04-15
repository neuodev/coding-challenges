function isPalindrome(string: string) {
  let newString = '';
  for (const char of string.toLocaleLowerCase()) {
    if (char.charCodeAt(0) > 122 || char.charCodeAt(0) < 97 || char == ' ')
      continue;
    newString += char;
  }
  let left = 0,
    right = newString.length - 1;
  while (left < right) {
    if (newString[left] !== newString[right]) return false;
    left++;
    right--;
  }
  return true;
}

// console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('aba'));
