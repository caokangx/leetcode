/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort();
  const result = [[]];
  dfs([], 0);
  return result;
  function dfs(currArray, currIndex) {
    if (currIndex >= nums.length) {
      return;
    }
    currArray.push(nums[currIndex]);
    result.push([...currArray]);
    dfs(currArray, currIndex + 1);
    currArray.pop();
    const currChar = nums[currIndex];
    while (currIndex + 1 < nums.length && currChar === nums[currIndex + 1]) {
      currIndex++;
    }
    if (currIndex + 1 < nums.length) {
      dfs(currArray, currIndex + 1);
    }

  }
};