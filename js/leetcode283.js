/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let index = 0;
  let count = 0;
  for(let current = 0; current < nums.length; current++) {
    if(nums[current] !== 0) {
      nums[index] = nums[current];
      index++;
    }
    else {
      count++;
    }
  }
  for(; index < nums.length; index++) {
    nums[index] = 0; 
  }
  return nums;
};