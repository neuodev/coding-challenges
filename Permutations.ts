var permute = function (nums) {
  function backtrack(results, nums, permutation = []) {
    if (permutation.length === nums.length) {
      results.push([...permutation]);
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (permutation.includes(nums[i])) continue;
        permutation.push(nums[i]);
        backtrack(results, nums, permutation);
        permutation.pop();
      }
    }
  }

  const results = [];
  backtrack(results, nums);
  console.log(results);
  return results;
};
permute([1, 2, 3]);
