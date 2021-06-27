/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function (nums) {
  const result = [[]];
  dfs([], 0);
  return result;
  function dfs(currentArray, currentIndex) {
    if (currentIndex >= nums.length) {
      return;
    }
    currentArray.push(nums[currentIndex]);
    result.push([...currentArray]);
    dfs(currentArray, currentIndex + 1);
    currentArray.pop();
    dfs(currentArray, currentIndex + 1);
  }
};

subsets([1, 2, 3]);