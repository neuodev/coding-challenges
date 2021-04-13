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

