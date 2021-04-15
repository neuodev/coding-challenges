function substring(string: string) {
  if (string.length <= 1) return string.length;
  const seenChars = {};
  let longest = 0;
  let left = 0;
  for (let right = 0; right < string.length; right++) {
    const currentChar = string[right];
    const prevSeenChar = seenChars[currentChar];
    if (prevSeenChar >= left) {
      left = prevSeenChar + 1;
    }
    seenChars[currentChar] = right;
    longest = Math.max(longest, right - left + 1);
  }

  return longest;
}
console.log(substring('abcabcbb'));
