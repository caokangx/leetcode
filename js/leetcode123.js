/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const { length } = prices;
  const dp = [[0, -prices[0]]];
  const tradeTimes = [[0, 1]];
  for (let i = 1; i < length; i++) {
    dp.push([0, 0]);
    tradeTimes.push([0, 0]);
    if (dp[i - 1][0] < dp[i - 1][1] + prices[i]) {
      dp[i][0] = dp[i - 1][1] + prices[i];
      tradeTimes[i][0] = tradeTimes[i - 1][1];
    }
    else {
      dp[i][0] = dp[i - 1][0];
      tradeTimes[i][0] = tradeTimes[i - 1][0];
    }
    if (dp[i - 1][1] < dp[i - 1][0] - prices[i] && tradeTimes[i - 1] < 2) {
      dp[i][1] = dp[i - 1][0] - prices[i];
      tradeTimes[i] = tradeTimes[i - 1][0] + 1;
    }
    else {
      dp[i][1] = dp[i - 1][1];
      tradeTimes[i] = tradeTimes[i - 1][1];
    }
  }
  return dp[length - 1][0];
};

maxProfit([3, 3, 5, 0, 0, 3, 1, 4]);