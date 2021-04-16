function topKFrequent(nums, k) {
  let obj = {},
    res = [],
    j = 0;
  for (let num of nums) {
    obj[num] = (obj[num] || 0) + 1;
  }
  let sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]),
    count = 0;
  while (j < k) {
    res.push(Number(sorted[j][0]));
    j++;
  }
  return res;
}

topKFrequent([1, 1, 1, 2, 2, 3], 2);
