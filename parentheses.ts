let openParentheses = ['(', '{', '['];
let closeParentheses = [')', '}', ']'];
const isValid = function (s: string) {
  let stack = [];
  for (const char of s) {
    if (isOpen(char)) stack.push(char);
    if (isClose(char) && !isMatch(char, stack)) {
      return false;
    }
  }
  if (stack.length >= 1) return false;
  return true;
};

function isMatch(char: string, stack: string[]) {
  let last = stack[stack.length - 1];
  let findLastIdx = closeParentheses.findIndex(ch => ch == char);
  if (last !== openParentheses[findLastIdx]) return false;
  stack.pop();
  return true;
}
function isOpen(char: string) {
  return openParentheses.find(ch => ch == char);
}
function isClose(char: string) {
  return closeParentheses.find(ch => ch == char);
}

console.log(isValid('('));
