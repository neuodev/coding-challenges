function longestPalindrom(str = 'abaxyzzyxf') {
    let currentLongest = [0, 1];
    for (let i = 1; i < str.length; i++) {
      let odd = getLongestPalindromeFrom(str, i - 1, i + 1);
      let even = getLongestPalindromeFrom(str, i - 1, i);
      currentLongest = updatePalindrom(currentLongest, odd, even);
    }
    console.log(currentLongest);
    return str.substring(currentLongest[0], currentLongest[1]);
  }
  
  function updatePalindrom(currentLongest, odd, even) {
    let longest;
    odd[0] > even[0] && odd[1] > even[1] ? (longest = odd) : (longest = even);
    return currentLongest[0] > longest[0] && currentLongest[1] > longest[1]
      ? currentLongest
      : longest;
  }
  
  function getLongestPalindromeFrom(string, leftIdx, rightIdx) {
    while (leftIdx >= 0 && rightIdx < string.length) {
      if (string[leftIdx] !== string[rightIdx]) break;
      leftIdx--;
      rightIdx++;
    }
    return [leftIdx + 1, rightIdx];
  }
  
  console.log(longestPalindrom('abaxyzzyxf'));
  