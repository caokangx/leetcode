/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function (nums, target) {
  // return binarySearch(nums, target, 0, nums.length);
  let i = 0, j = nums.length - 1;
  let center;
  while (true) {
    if (j - i <= 1) {
      if (nums[i] === target) {
        return i;
      }
      if (nums[j] === target) {
        return j;
      }
      return -1;
    }
    center = Math.floor((i + j) / 2);
    // 在右边
    if (nums[center] < target) {
      i = center;
    }
    // 在左边
    else if (nums[center] > target) {
      j = center;
    }
    // 相等
    else if (nums[center] === target) {
      return center;
    }
  }
};

// function binarySearch(nums, target, start, end) {
//   if (start > end) {
//     return -1;
//   }
//   if (start === end) {
//     if (nums[start] === target) {
//       return start;
//     }
//     return -1;
//   }
//   const res1 = binarySearch(nums, target, start, Math.floor((start + end) / 2));
//   const res2 = binarySearch(nums, target, Math.ceil((start + end) / 2), end);
//   if (res1 !== -1) {
//     return res1;
//   }
//   return res2;
// }

// const result = search([-1, 0, 3, 5, 9, 12], 9);
// console.log(result);
