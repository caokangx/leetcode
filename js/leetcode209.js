/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function (target, nums) {
    let i = 0, j = 0;
    let sum = 0;
    let minLength = 1000000;
    while (i < nums.length && j < nums.length) {
      while (sum < target && i < nums.length) {
        sum += nums[i];
        i++;
      }
      if ((i - j) < minLength && sum >= target) {
        minLength = (i - j);
      }
      while (sum >= target && j < i) {
        if ((i - j) < minLength && sum >= target) {
          minLength = (i - j);
        }
        sum -= nums[j];
        j++;
      }
    }
    if (minLength === 1000000) {
      return 0;
    }
    return minLength;
  };
  
  minSubArrayLen(7, [2,3,1,2,4,3]);