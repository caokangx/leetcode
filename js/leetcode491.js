/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  const result = [];
  dfs(0, []);
  return result;
  function dfs(currentIndex, currentArray) {
    if (currentIndex >= nums.length) {
      return;
    }
    if (lastItem(currentArray) <= nums[currentIndex]) {
      currentArray.push(nums[currentIndex]);
      if (currentArray.length >= 2) {
        result.push([...currentArray]);
      }
      dfs(currentIndex + 1, currentArray);
      currentArray.pop();
      while (currentIndex + 1 < nums.length && nums[currentIndex + 1] === lastItem(currentArray)) {
        currentIndex++;
      }
      dfs(currentIndex + 1, currentArray);
    }
    else {
      dfs(currentIndex + 1, currentArray);
    }
  }
};
function lastItem(arr) {
  if (!arr.length) {
    return -10000;
  }
  return arr[arr.length - 1];
}

findSubsequences([4, 6, 7, 7]);
