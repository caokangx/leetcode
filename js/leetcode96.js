/**
 * @param {number} n
 * @return {number}
 */
 var numTrees = function(n) {
  const dp = [0, 1, 2];
  for(let i = 3; i <= n; i++) {
    let sum = 0;
    for(let j = 1; j <= n; j++) {
      sum += dp[j - 1] * dp[i - j - 1];
    }
    dp.push(sum);
  }
  return dp[n];
};
numTrees(3);