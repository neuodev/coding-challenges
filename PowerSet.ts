// O(2^N * N) time | O(2^N * N)

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

function powerSet(array, idx = null) {
  if (idx === null) {
    idx = array.length - 1;
  } else if (idx < 0) return [[]];
  let ele = array[idx];
  let subsets = powerSet(array, idx - 1);
  for (let i = 0; i < subsets.length; i++) {
    let numCopy = [...subsets[i], ele];
    subsets.push(numCopy);
  }
  return subsets;
}

powerSet([1, 2, 3]);
