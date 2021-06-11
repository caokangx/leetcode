/**
 * @param {number[]} nums
 * @return {number}
 */
var doRob = function (nums) {
  const dp = new Array(nums.length);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }
  return dp[nums.length - 1];
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const { length } = nums;
  return Math.max(doRob(nums.slice(0, -2)), doRob(nums.slice(1, -1)));
}