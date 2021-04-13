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
