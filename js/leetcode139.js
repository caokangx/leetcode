/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const m = wordDict.length;
  const n = s.length;

  const dp = [];
  for (let i = 0; i < m; i++) {
    const row = [];
    for (let j = 0; j <= n; j++) {
      if (j === 0) {
        row.push(true);
      }
      else if (i === 0) {
        if (s.substr(0, j) === s[0]) {
          row.push(true);
        }
        else {
          row.push(false);
        }
      }
      else {
        row.push(false);
      }
    }
    dp.push(row);
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j <= n; j++) {
      if ((j - wordDict[i].length) < 0) {
        dp[i][j] = dp[i - 1][j];
      }
      else {
        dp[i][j] = dp[i - 1][j] ||
          (dp[i][j - wordDict[i].length] && s.substring(j - wordDict[i].length, j + 1) === wordDict[i]);
      }
    }
  }
  return dp[m - 1][n];
};
wordBreak("leetcode", ["leet", "code"]);
