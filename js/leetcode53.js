/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const { length } = nums;
  // const dp = new Array(length);
  let dp = nums[0];
  let result = dp;
  for (let i = 1; i < length; i++) {
    dp = Math.max(dp + nums[i], nums[i]);
    result = Math.max(result, dp);
  }
  return result;
};