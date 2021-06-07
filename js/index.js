/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const m = s.length;
  const n = wordDict.length;

  const dp = [];
  for (let i = 0; i < m; i++) {
    dp.push(false);
  }
  for (let j = 0; j < wordDict.length; j++) {
    if (s[0] === wordDict[j]) {
      dp[0] = true;
    }
  }
  for (let i = 1; i < m; i++) {
    let flag = false;
    for (let j = 0; j < n; j++) {
      if (i + 1 - wordDict[j].length > 0) {
        if (s.substring(i + 1 - wordDict[j].length, i + 1) === wordDict[j] && dp[i - wordDict[j].length]) {
          flag = true;
        }
      }
      else if (i + 1 - wordDict[j].length === 0) {
        if (s.substring(i + 1 - wordDict[j].length, i + 1) === wordDict[j]) {
          flag = true;
        }
      }
    }
    dp[i] = flag;
  }
  return dp[list.length - 1][m][n];
};
