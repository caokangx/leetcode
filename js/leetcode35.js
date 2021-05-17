/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//  var searchInsert = function (nums, target) {
//   let i = 0, j = nums.length - 1;
//   let mid;
//   if(target > nums[j]) {
//     return j + 1;
//   }
//   if(target < nums[0]) {
//     return 0;
//   }
//   while (j - i > 1) {
//     mid = Math.floor((i + j) / 2);
//     if (nums[mid] > target) {
//       j = mid;
//     }
//     else if (nums[mid] < target) {
//       i = mid;
//     }
//     else if(nums[mid] === target){
//       return mid;
//     }
//   }
//   if(target === nums[j]) {
//     return j;
//   }
//   if(target === nums[i]) {
//     return i;
//   }
//   return j;
// };

// searchInsert([1,3,5,6], 4);

var searchInsert = function (nums, target) {
  let i = 0, j = nums.length - 1;
  let mid;
  while (i <= j) {
    mid = Math.round((i + j) / 2);
    if (nums[mid] == target) {
      return mid;
    }
    else if (nums[mid] < target) {
      i = mid;
    }
    else {
      j = mid;
    }
  }
  return i;
};