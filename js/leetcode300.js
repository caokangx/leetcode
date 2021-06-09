/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const { length } = nums;
  const dp = new Array(length);
  dp[0] = 1;
  let result = 1;
  for (let i = 1; i < length; i++) {
    dp[i] = 1;
    for (let j = 0; j <= i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    result = Math.max(result, dp[i]);
  }
  return result;
};