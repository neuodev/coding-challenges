groupAnagrams(['go', 'og', 'cat', 'act', 'tac', 'olfp', 'flop']);
function groupAnagrams(list: string[]) {
  let hashTable = {};
  for (let i = 0; i < list.length; i++) {
    const word = list[i];
    let sortedWord = sortAlphabets(word);
    if (!hashTable[sortedWord]) {
      hashTable[sortedWord] = [word];
    } else {
      hashTable[sortedWord] = [...hashTable[sortedWord], word];
    }
  }
  return [...Object.values(hashTable)];
}

function sortAlphabets(text) {
  return text.split('').sort().join('');
}
