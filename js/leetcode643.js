/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const dp = [];
  for (let i = 0; i <= m; i++) {
    dp.push(new Array(n + 1));
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (obstacleGrid[i - 1][j - 1] === 1) {
        dp[i][j] = 0;
      }
      else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  return dp[m][n];
};

uniquePathsWithObstacles(
  [[0, 0, 0], [0, 1, 0], [0, 0, 0]]);