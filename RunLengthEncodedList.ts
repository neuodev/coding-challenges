/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  let output = [];
  let freq = 0;
  let val = 1;
  while (val < nums.length) {
    const subArray = new Array(nums[freq]).fill(nums[val]);
    output = [...output, ...subArray];
    freq += 2;
    val += 2;
  }
  return output;
};
