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
  const m = nums.length;
  const n = nums[0].length;
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
  console.table(dp);
};
canPartition([1,5,11,5]);