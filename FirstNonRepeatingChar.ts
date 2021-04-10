/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let hashTable = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (hashTable[char]) hashTable[char]++;
    else {
      hashTable[char] = 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    console.log(hashTable[char]);
    if (hashTable[char] == 1) return i;
  }

  return -1;
};
