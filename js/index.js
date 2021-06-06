// 背包问题，不过背包的value由一维变成了二维了

/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  const list = strs.map(str => {
    const item = {
      str,
      value0: 0,
      value1: 0
    };
    str.split('').forEach(char => {
      if (char === '0') {
        item.value0 += 1;
      }
      else {
        item.value1 += 1;
      }
    });
    return item;
  });
  const dp = [];
  for (let i = 0; i < list.length; i++) {
    const row = [];
    for (let j = 0; j <= m; j++) {
      const subRow = [];
      for (let k = 0; k <= n; k++) {
        if (i === 0 && list[0].value0 <= j && list[0].value1 <= k) {
          subRow.push(1);
        }
        else {
          subRow.push(0);
        }
      }
      row.push(subRow);
    }
    dp.push(row);
  }
  for (let i = 1; i < list.length; i++) {
    for (let j = 0; j <= m; j++) {
      for (let k = 0; k <= n; k++) {
        const item = list[i];
        // list[i] 装不下
        if (j - item.value0 < 0 || k - item.value1 < 0) {
          dp[i][j][k] = dp[i - 1][j][k];
        }
        else {
          dp[i][j][k] = Math.max(dp[i - 1][j][k], dp[i - 1][j - item.value0][k - item.value1] + 1);
        }
      }
    }
  }
  return dp[list.length - 1][m][n];
};
