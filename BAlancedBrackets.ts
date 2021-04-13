const openingBrackets = ['(', '{', '['];
const closingBrackets = [')', '}', ']'];
console.log(balancedBrackets('(([]()()){})'));
function balancedBrackets(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    const bracket = str[i];
    if (isOpenBracket(bracket)) {
      stack.push(bracket);
    }
    if (isClosingBracket(bracket)) {
      if (!isValidClosingBracket(bracket, stack)) return false;
    }
  }
  if (stack.length > 0) return false;
  return true;
}

function isValidClosingBracket(bracket, stack) {
  let lastBracket = stack[stack.length - 1];
  let bracketIdx = closingBrackets.findIndex(b => b == bracket);
  if (openingBrackets[bracketIdx] !== lastBracket) return false;
  stack.pop();

  return true;
}

function isOpenBracket(bracket) {
  return openingBrackets.find(b => b == bracket) === bracket;
}

function isClosingBracket(bracket) {
  return closingBrackets.find(b => b == bracket) === bracket;
}
