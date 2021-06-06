/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
  let sum = 0;
  stones.forEach(stone => sum += stone);
  const length = Math.ceil(sum / 2);
  const dp = [];
  for (let i = 0; i < stones.length; i++) {
    const row = [];
    for (let j = 0; j <= length; j++) {
      if (j === 0) {
        row.push(true);
      }
      else if (i === 0) {
        if (j === stones[0]) {
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
  }
  for (let i = 1; i < stones.length; i++) {
    for (let j = 1; j <= length; j++) {
      // 放不下
      if (stones[i] > j) {
        dp[i][j] = dp[i - 1][j];
      }
      else {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - stones[i]];
      }
    }
  }
  let result = 0;
  for (let i = 0; i < length; i++) {
    if (dp[stones.length - 1][i]) {
      result = i;
    }
  }
  return Math.abs(i - (sum - result));
};