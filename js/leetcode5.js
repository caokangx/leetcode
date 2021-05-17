/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  const length = s.length;
  const dp = new Array();
  let maxLength = 0;
  let result = '';
  for(let i = 0; i < length; i++) {
    dp.push(new Array(length));
  }
  for(let j = 0; j < length; j++) {
    for(i = 0; i <= j; i++) {
      if((j - i) <= 1) {
        dp[i][j] = s[i] === s[j];
      }
      else {
        dp[i][j] = dp[i+1][j-1] && (s[i] === s[j]);
      }
      if(dp[i][j] && (j - i + 1) > maxLength) {
        maxLength = j - i + 1;
        result = s.substr(i, maxLength);
      }
    }
  }
  return result;
};