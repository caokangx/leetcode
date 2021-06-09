/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function (nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;
  const dp = [];
  for (let i = 0; i < m; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
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
        dp[i][j] = Math.max(dp[i - 1][j - 1] + 1, dp[i - 1][j], dp[i][j - 1]);
      }
      else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
      result = Math.max(result, dp[i][j]);
    }
  }
  return result;
};

maxUncrossedLines([1, 4, 2], [1, 2, 4]);