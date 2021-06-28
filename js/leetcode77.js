/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];
  function dfs(currentIndex, list) {
    if (list.length === k) {
      result.push([...list]);
      return;
    }
    if (currentIndex > n) {
      return;
    }
    list.push(currentIndex);
    dfs(currentIndex + 1, list);
    list.pop();
    dfs(currentIndex + 1, list);
  }
  dfs(1, []);
  return result;
};