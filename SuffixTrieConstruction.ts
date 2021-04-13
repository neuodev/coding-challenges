class Char {
  char: string;
  children: {};
  isEndOfWord: boolean;
  constructor(char) {
    this.char = char;
    this.children = {};
    this.isEndOfWord = false;
  }
}

// searching  O(M) M: length of the word
class Trie {
  root: Char;
  constructor() {
    this.root = new Char(' ');
  }
  addSuffix(string: string) {
    for (let i = 0; i < string.length; i++) {
      let current = this.root;
      for (let j = i; j < string.length; j++) {
        let char = string[j];
        if (!current.children[char]) {
          current.children[char] = new Char(char);
        }
        current = current.children[char];
      }
      current.isEndOfWord = true;
      console.log(current.char);
    }
  }

  contains(word: string) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      let charNode = current.children[char];
      if (!charNode) return false;
      current = charNode;
    }
    if (!current.isEndOfWord) return false;
    return true;
  }
}
const trie = new Trie();
trie.addSuffix('babc');
