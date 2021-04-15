
// space : O(n) || time : O(n)
function removeInvalidParentheses(s: string) {
  if (!s) return;
  let stack = [];
  let strArr = s.split('');

  for (let i = 0; i < strArr.length; i++) {
    const current = strArr[i];

    if (current == '(') stack.push(i);
    else if (current === ')' && stack.length) {
      stack.pop();
    } else if (current === ')') {
      strArr[i] = '';
    }
  }
  while (stack.length) {
    let currentIdx = stack.pop();
    strArr[currentIdx] = '';
  }
  return strArr.join('');
}

console.log(removeInvalidParentheses('))(('));
