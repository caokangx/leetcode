/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const { length } = prices;
  const dp = [[0, -prices[0]]];
  for (let i = 1; i < length; i++) {
    dp.push([0, 0]);
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }
  return dp[length - 1][0];
};
