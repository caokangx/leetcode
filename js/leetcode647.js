/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  const { length: m } = s;
  const dp = [];
  for (let i = 0; i < m; i++) {
    dp.push(new Array(m));
  }
  let result = 0;
  for (let j = 0; j < m; j++) {
    for (let i = 0; i <= j; i++) {
      if (i === j) {
        dp[i][j] = true;
      }
      else if (i + 1 === j) {
        dp[i][j] = s[i] === s[j];
      }
      else {
        dp[i][j] = s[i + 1][j - 1] && s[i] === s[j];
      }
      dp[i][j] && result++;
    }
  }
  return result;
};