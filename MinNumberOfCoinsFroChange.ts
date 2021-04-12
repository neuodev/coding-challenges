// [1,2,4]  $6

function minNumberOfCoins(conis, target) {
  let nums = Array(target + 1).fill(Infinity);
  nums[0] = 0;
  for (let i = 0; i < conis.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      let denom = conis[i];
      let amount = nums[j];
      if (denom < amount)
        nums[amount] = Math.min(nums[amount], 1 + nums[amount - denom]);
    }
  }
  console.log(nums[target]);
  return nums[target];
}

minNumberOfCoins([1, 2, 4], 6);
