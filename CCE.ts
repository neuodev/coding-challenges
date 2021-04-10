const chars = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

function CCE(str: string, key: number) {
  let array = [];
  key = key % 26;
  for (let i = 0; i < str.length; i++) {
    const idx = chars.indexOf(str[i]);
    array.push(chars[(idx + key) % 26]);
  }
  console.log(array.join(''));
  return array.join('');
}
CCE('xyz', 2);
