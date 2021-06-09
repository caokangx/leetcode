/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length;
  const n = text2.length;
  const dp = [];
  let result = 0;
  for (let i = 0; i < m; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        row.push((text1[i] === text2[j]) ? 1 : 0);
      }
      else if (i === 0) {
        if (text1[i] === text2[j] || row[j - 1] === 1) {
          row.push(1);
        }
        else {
          row.push(0);
        }
      }
      else if (j === 0) {
        if (text1[i] === text2[j] || dp[i - 1][j] === 1) {
          row.push(1);
        }
        else {
          row.push(0);
        }
      }
      else {
        row.push(0);
      }
      if (row[j] === 1) {
        result = 1;
      }
    }
    dp.push(row);
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (text1[i] === text2[j]) {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1] + 1);
      }
      else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
      result = Math.max(result, dp[i][j]);
    }
  }
  return result;
};