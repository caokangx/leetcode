/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  if (s.length < 4 || s.length > 12) {
    return [];
  }
  const result = [];
  dfs([], 0, undefined, 1);
  return result;
  function dfs(currentArray, currentIndex, currNum, currentSeq) {
    if (currentSeq > 4) {
      return;
    }
    if (currentIndex >= s.length) {
      if (currentSeq === 4) {
        result.push(currentArray.join(''));
      }
      return;
    }
    // 上一步点的点
    if (currNum === undefined) {
      currentArray.push(s[currentIndex]);
      dfs(currentArray, currentIndex + 1, Number(s[currentIndex]), currentSeq);
      currentArray.pop();
    }
    // 0开头，这一位只能是0
    else if (currNum === 0) {
      currentArray.push('.');
      dfs(currentArray, currentIndex, undefined, currentSeq + 1);
      currentArray.pop();
    }
    else {
      const nextNum = currNum * 10 + Number(s[currentIndex]);
      // 跟到下一位，大于255，只能点点
      if (nextNum > 255) {
        currentArray.push('.');
        dfs(currentArray, currentIndex, undefined, currentSeq + 1);
        currentArray.pop();
      }
      // 都可以
      else {
        currentArray.push('.');
        dfs(currentArray, currentIndex, undefined, currentSeq + 1);
        currentArray.pop();
        currentArray.push(s[currentIndex]);
        dfs(currentArray, currentIndex + 1, nextNum, currentSeq);
        currentArray.pop();
      }
    }
  }
};
function lastItem(arr) {
  if (!arr.length) {
    return -10000;
  }
  return arr[arr.length - 1];
}

const list = creatTree([1, 2, 2, null, 3, null, 3]);

isSymmetric(list);
