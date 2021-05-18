/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function (nums) {
    const result = [];
    let baseIndex;
    if (nums[0] >= 0) {
      baseIndex = 0;
    }
    else if (nums[nums.length - 1] <= 0) {
      baseIndex = nums.length - 1;
    }
    else {
      for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] <= 0 && nums[i + 1] >= 0) {
          baseIndex = i;
          break;
        }
      }
    }
  
    let i = baseIndex, j = baseIndex + 1;
    while (i >= 0 || j < nums.length) {
      if (i < 0) {
        result.push(nums[j] * nums[j]);
        j++;
      }
      else if (j >= nums.length) {
        result.push(nums[i] * nums[i]);
        i--;
      }
      else if (-1 * nums[i] < nums[j]) {
        result.push(nums[i] * nums[i]);
        i--;
      }
      else {
        result.push(nums[j] * nums[j]);
        j++
      }
    }
    return result;
  };