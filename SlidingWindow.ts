function substring(string: string) {
  if (string.length <= 1) return string.length;
  const hashMap = {};
  let longest = 0;
  let currentLong = 0;
  let left = 0;
  let right = 0;
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (!hashMap[char]) {
      hashMap[char] = i;
      right = i;
      currentLong++;
    } else {
      if (hashMap[char] < left) {
        hashMap[char] = i;
      } else {
        left = hashMap[char] + 1;
      }
      longest = longest > currentLong ? longest : currentLong;
    }
  }
  return longest;
}
console.log(substring('abcbda'));
