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
}
