/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  const m = s.length;
  const n = s.length;

  const dp = [];
  for (let i = 0; i < m; i++) {
    dp.push(new Array(n));
  }
  for (let j = 0; j < n; j++) {
    for (let i = j; i >= 0; i--) {
      if (i === j) {
        dp[i][j] = 1;
      }
      else if (i + 1 === j) {
        if (s[i] === s[j]) {
          dp[i][j] = 2;
        }
        else {
          dp[i][j] = 1;
        }
      }
      else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
        if (s[i] === s[j]) {
          dp[i][j] = Math.max(dp[i][j], dp[i + 1][j - 1] + 2);
        }
      }
    }
  }
  return dp[m - 1][n - 1];
};