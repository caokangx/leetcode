/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function (n) {
  function tranverse(currLeftNum, currRightNum, currString, n) {
    if (currLeftNum === n && currRightNum === n) {
      result.add(currString);
      return;
    }
    // 左边比右边多
    if (currLeftNum > currRightNum) {
      // 左边加完了，只能加右边
      if (currLeftNum === n) {
        tranverse(currLeftNum, currRightNum + 1, currString + ')', n);
      }
      // 左边没加完，并且右边比左边少，所以左右都能加
      else {
        tranverse(currLeftNum, currRightNum + 1, currString + ')', n);
        tranverse(currLeftNum + 1, currRightNum, currString + '(', n);
      }
    }
    // 左边等于右边，则只能加左边
    else {
      tranverse(currLeftNum + 1, currRightNum, currString + '(', n);
    }
  }
  const result = new Set();
  tranverse(1, 0, '(', n);
  return Array.from(result);
};

