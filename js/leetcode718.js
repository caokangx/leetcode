/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;

  const dp = [];
  for (let i = 0; i < m; i++) {
    const row = [];
    for (let j = 0; j < m; j++) {
      if (i === 0 || j === 0) {
        row.push(nums1[i] === nums2[j] ? 1 : 0);
      }
      else {
        row.push(0);
      }
    }
    dp.push(row);
  }
  let result = 0;
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (nums1[i] === nums2[j]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      }
      else {
        dp[i][j] = 0;
      }
      result = Math.max(result, dp[i][j]);
    }
  }
  return result;
};