/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;
  const dp = [];
  for (let i = 0; i < m; i++) {
    const row = []
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        row.push(word1[i] === word2[j] ? 1 : 0);
      }
      else if (i === 0) {
        if (word1[i] === word2[j]) {
          row.push(1);
        }
        else {
          row.push(row[j - 1]);
        }
      }
      else if (j === 0) {
        if (word1[i] === word2[j]) {
          row.push(1);
        }
        else {
          row.push(dp[i - 1][0]);
        }
      }
      else {
        row.push(0);
      }
    }
    dp.push(row);
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (word1[i] === word2[j]) {
        dp[i][j] = Math.max(dp[i - 1][j - 1] + 1, dp[i][j - 1], dp[i - 1][j]);
      }
      else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }
  return m + n - 2 * dp[m - 1][n - 1];
};