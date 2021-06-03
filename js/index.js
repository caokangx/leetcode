// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// // dfs版本，复杂度是指数级复杂度
// var canPartition = function (nums) {
//   let flag = false;
//   function dfs(count1, count2, index) {
//     if (index === nums.length) {
//       if (count1 === count2) {
//         flag = true;
//       }
//       return;
//     }
//     dfs(count1 + nums[index], count2, index + 1);
//     dfs(count1, count2 + nums[index], index + 1);
//   }
//   dfs(0, 0, 0);
//   return flag;
// };


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let sum = 0;
  nums.map(num => {
    sum += num;
  });
  if (sum % 2) {
    return false;
  }
  sum /= 2;
  const m = nums.length;
  const n = sum;
  const dp = [];
  for (let i = 0; i < m; i++) {
    const row = [];
    for (let j = 0; j <= n; j++) {
      if (j === 0) {
        row.push(true);
      }
      else {
        row.push(false);
      }
    }
    dp.push(row);
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j <= n; j++) {
      const lastWeight = j - nums[i];
      if (nums[i] > j) {
        dp[i][j] = dp[i - 1][j];
      }
      else {
        dp[i][j] = dp[i - 1][j - nums[i]] || dp[i - 1][j];
      }
    }
  }
  return dp[m - 1][n];
};