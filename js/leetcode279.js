/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const m = Math.ceil(Math.sqrt(n));
  const dp = [];
  for (let i = 0; i <= m; i++) {
    const row = [];
    for (let j = 0; j <= n; j++) {
      if (i === 0) {
        row.push(0);
      }
      else if (i === 1) {
        row.push(j);
      }
      else if (j === 0) {
        row.push(0);
      }
      else if (j === 1) {
        row.push(1);
      }
      else {
        row.push(0);
      }
    }
    dp.push(row);
  }
  for (let i = 2; i <= m; i++) {
    for (let j = 2; j <= n; j++) {
      if ((j - i * i) < 0) {
        dp[i][j] = dp[i - 1][j];
      }
      else {
        dp[i][j] = Math.min(dp[i][j - i * i] + 1, dp[i - 1][j]);
      }
    }
  }
  return dp[m][n];
};