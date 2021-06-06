/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  const m = coins.length;
  const n = amount;
  const dp = [];
  for (let i = 0; i < m; i++) {
    const row = [];
    for (let j = 0; j <= n; j++) {
      if (j === 0) {
        row.push(1);
      }
      else if (i === 0) {
        if (j % coins[0] === 0) {
          row.push(1);
        }
        else {
          row.push(0);
        }
      }
      else {
        row.push(0);
      }
    }
    dp.push(row);
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j <= n; j++) {
      if (j - coins[i] < 0) {
        dp[i][j] = dp[i - 1][j];
      }
      else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i]];
      }
    }
  }
  return dp[m - 1][n];
};
