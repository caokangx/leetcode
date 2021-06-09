/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  const { length } = nums;
  const dp = new Array(length);
  dp[0] = 1;
  let result = 1;
  for (let i = 1; i < length; i++) {
    if (nums[i] > nums[i - 1]) {
      dp[i] = dp[i - 1] + 1;
    }
    else {
      dp[i] = 1;
    }
    result = Math.max(result, dp[i]);
  }
  return result;
};