/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const result = [];
  function dfs(currentIndex, list, total) {
    if (list.length === k) {
      if (total === n) {
        result.push([...list]);
      }
      return;
    }
    if (currentIndex > 9) {
      return;
    }
    list.push(currentIndex);
    dfs(currentIndex + 1, list, total + currentIndex);
    list.pop();
    dfs(currentIndex + 1, list, total);
  }
  dfs(1, [], 0);
  return result;
};