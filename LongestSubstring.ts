function substring(string: string) {
  if (string.length <= 1) return string.length;
  const set = new Set();
  let longest = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length; j++) {
      const char = string[j];
      if (set.has(char)) break;
      else set.add(char);
    }
    longest = set.size > longest ? set.size : longest;
    set.clear();
  }
  return longest;
}
substring('abcbda');
