/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const list = [];
  let sum = 0;
  let result = -1000000;
  let i = 0, j = 0;
  let left = 0, right = 0;
  for (; j < k; j++) {
    sum += nums[j];
    right++;
  }
  for (; j < nums.length - 1; j++) {
    sum -= nums[i];
    sum += nums[j + 1];
    if (sum > result) {
      result = sum;
      left = i + 1;
      right = j + 1;
    }
    i++;
  }
  return nums.slice(left, right);
};