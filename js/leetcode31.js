/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var nextPermutation = function (nums) {
  const length = nums.length;
  let startIndex = -1, endIndex = 100000, startVal = 1000000;
  for (let i = length - 1; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      // 后一个比前一个大
      if (nums[i] > nums[j]) {
        // const temp = nums[i];
        // nums[i] = nums[j];
        // nums[j] = temp;
        // hasSwaped = true;

        // 这次找到的交换位置要更靠后
        if (startIndex < j) {
          startIndex = j;
          endIndex = i;
          startVal = nums[i];
          break;
        }
        // 位置相等但是这次的要更小
        else if (startIndex === j && startVal > nums[i]) {
          startIndex = j;
          endIndex = i;
          startVal = nums[i];
          break;
        }
      }
    }
  }
  const hasSwaped = startIndex !== -1;
  if (hasSwaped) {
    let temp = nums[startIndex];
    nums[startIndex] = nums[endIndex];
    nums[endIndex] = temp;
    const start = startIndex;
    const end = endIndex;
    temp = nums.slice(start + 1).sort((a, b) => a - b);
    nums.splice(start + 1, length - start - 1, ...temp);
  }
  if (!hasSwaped) {
    return nums.sort((a, b) => a - b);
  }
  return nums;
};

// nextPermutation([11, 12, 0, 27, 3, 11, 21, 9, 0, 15, 26, 27, 17, 24, 0, 16, 4, 17, 14, 8, 15, 8, 2, 16, 10, 6, 6, 24, 16, 2, 18, 19, 6, 10, 17, 10, 21, 0, 11, 13, 7, 7, 2, 16, 24, 25, 2, 20, 12, 9, 20, 19]);