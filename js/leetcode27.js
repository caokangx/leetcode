/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    let left = 0, right = nums.length - 1;
    let count = 0;
    nums.forEach(num => {
      if(num === val) {
        count++;
      }
    })
  
    while(left < right) {
      // 从后向前找到第一个不等于val的元素
      while(left < right && nums[right] === val) {
        right--;
      }
      // 从前向后找到第一个等于val的元素
      while(left < right && nums[left] !== val) {
        left++;
      }
      if(left < right) {
        let temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
      }
    }
    return nums.length - count;
  };
  
  removeElement([3,2,2,3,3], 2);