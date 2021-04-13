function getPowerset(array) {
  let powerSet = [[]];
  if (array.length === 0) return powerSet;
  for (let i = 0; i < array.length; i++) {
    let setLen = powerSet.length - 1;
    while (setLen >= 0) {
      let setCopy = [...powerSet[setLen]];
      setCopy.push(array[i]);
      powerSet.push(setCopy);
      setLen--;
    }
  }
  return powerSet;
}

getPowerset([1, 2, 3]);
