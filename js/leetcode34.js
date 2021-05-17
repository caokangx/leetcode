/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function (nums, target) {
  let i = 0, j = nums.length - 1;
  let mid;
  let pos = -1;
  while (i <= j) {
    mid = Math.round((i + j) / 2);
    if (target < nums[mid]) {
      j = mid - 1;
    }
    if (target > nums[mid]) {
      i = mid + 1;
    }
    if (target === nums[mid]) {
      pos = mid;
      break;
    }
  }
  if (pos === -1) {
    return [pos, pos];
  }
  let left = pos, right = pos;
  while (nums[left] === target && left >= 0) {
    left--;
  }
  while (nums[right] === target) {
    right++;
  }
  return [left + 1, right - 1];
};
searchRange([5, 7, 7, 8, 8, 10], 8);
