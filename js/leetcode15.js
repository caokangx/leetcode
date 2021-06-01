/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function (nums) {
  nums = nums.sort((a, b) => { return a - b; });
  function dfs(currentIndex, currentArray, sum, res) {
    if (currentIndex >= nums.length) {
      return;
    }
    if (currentArray.length === 3) {
      if (sum === 0) {
        res.push([...currentArray]);
      }
      return;
    }
    const currentValue = nums[currentIndex + 1];
    currentArray.push(currentValue);
    dfs(currentIndex + 1, currentArray, sum + currentValue, res);
    currentArray.pop();
    while (currentIndex < nums.length && nums[currentIndex] === nums[currentIndex + 1]) {
      currentIndex++;
    }
    dfs(currentIndex + 1, currentArray, sum, res);
  }

  const res = new Array();
  dfs(-1, [], 0, res);
  return res;
};

threeSum([-1, 0, 1, 2, -1, -4]);