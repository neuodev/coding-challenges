function levenshteinDistance(str1, str2) {
  let E = new Array(str1.length + 1).fill(0);
  for (let i = 0; i < E.length; i++) {
    E[i] = new Array(str2.length + 1).fill(0);
  }
  for (let i = 1; i < str2.length; i++) {
    E[i][0] = E[i - 1][0] + 1;
  }

  for (let i = 1; i < str2.length + 1; i++) {
    for (let j = 1; j < str1.length + 1; j++) {
      if (str2[i - 1] === str1[j - 1]) {
        E[i][j] = E[i - 1][j - 1];
      } else {
        E[i][j] = 1 + Math.min(E[i - 1][j], E[i][j - 1], E[i - 1][j - 1]);
      }
    }
  }
  return E[-1][-1];
}

levenshteinDistance('abc', 'yabd');
