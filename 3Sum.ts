function threeSum(nums: number[]) {
  nums = nums.sort((a, b) => a - b);
  let output = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i == 0 || (i > 0 && nums[i] != nums[i - 1])) {
      let low = i + 1;
      let heigh = nums.length - 1;
      let sum = 0 - nums[i];
      while (low < heigh) {
        if (nums[low] + nums[heigh] == sum) {
          output.push([nums[i], nums[low], nums[heigh]]);
          while (low < heigh && nums[low] == nums[low + 1]) low++;
          while (low < heigh && nums[heigh] == nums[heigh - 1]) heigh--;
          low++;
          heigh--;
        } else if (nums[low] + nums[heigh] > sum) {
          heigh--;
        } else {
          low++;
        }
      }
    }
  }

  return output;
}

threeSum([-1, 0, 1, 2, -1, -4]);
