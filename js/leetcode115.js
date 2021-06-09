/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (t, s) {
  const m = s.length;
  const n = t.length;
  const dp = [];
  for (let i = 0; i < m; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      if (i === 0) {
        row.push(s[i] === t[j] ? 1 : 0);
      }
      else {
        row.push(0);
      }
    }
    dp.push(row);
  }
  for (let i = 0; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (s[i] === t[j]) {
        dp[i][j] = dp[i][j - 1] + 1;
      }
      else {
        dp[i][j] = dp[i][j - 1];
      }
    }
  }
  return dp[m - 1][n - 1];
};