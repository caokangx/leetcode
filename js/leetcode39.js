/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];
  function dfs(list, currentSum, currentIndex) {
    if (currentSum === target) {
      result.push([...list]);
      return;
    }
    if (currentSum > target || currentIndex >= candidates.length) {
      return;
    }
    list.push(candidates[currentIndex]);
    dfs(list, currentSum + candidates[currentIndex], currentIndex);
    list.pop();
    dfs(list, currentSum, currentIndex + 1);
  }
  dfs([], 0, 0);
  return result;
};