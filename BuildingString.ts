function backspace(S: string, T: string) {
  let sArray = buildString(S);
  let tArray = buildString(T);
  if (sArray.length !== tArray.length) return false;
  for (let i = 0; i < sArray.length; i++) {
    if (sArray[i] !== tArray[i]) return false;
  }

  return true;
}

function buildString(string: string) {
  let strArray = [];
  for (const char of string) {
    if (char != '#') strArray.push(char);
    else strArray.pop();
  }

  return strArray;
}

console.log(backspace('x#y#z#', 'a#'));
