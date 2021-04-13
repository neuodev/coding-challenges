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
}
