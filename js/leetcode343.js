/**
 * @param {number} n
 * @return {number}
 */
 var integerBreak = function (n) {
  const result = [1, 1, 2, 4];
  const dp = [0, 1, 2, 3, 4];
  if (n < 5) {
    return result[n - 1];
  }
  for (let i = 5; i <= n; i++) {
    let result = 0;
    for (let j = 2; j <= i / 2; j++) {
      if ((dp[j] * dp[i - j]) > result) {
        result = dp[j] * dp[i - j];
      }
    }
    dp.push(result);
  }
  return dp[dp.length - 1];
};

integerBreak(10);