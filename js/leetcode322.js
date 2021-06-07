/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const m = coins.length;
  const n = amount;

  const dp = [];
  for (let i = 0; i < m; i++) {
    const row = [];
    for (let j = 0; j <= n; j++) {
      if (j === 0) {
        row.push(0);
      }
      else if (i === 0) {
        if ((j % coins[0]) === 0) {
          row.push(j / coins[0]);
        }
        else {
          row.push(-1);
        }
      }
      else {
        row.push(-1);
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
        if (dp[i - 1][j] >= 0 && dp[i][j - coins[i]] >= 0) {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - coins[i]] + 1);
        }
        else if (dp[i - 1][j] >= 0) {
          dp[i][j] = dp[i - 1][j];
        }
        else if (dp[i][j - coins[i]] >= 0) {
          dp[i][j] = dp[i][j - coins[i]] + 1;
        }
        else {
          dp[i][j] = -1;
        }
      }
    }
  }
  return dp[m - 1][n];
};