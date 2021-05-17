/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num < 0) {
    return false;
  }
  if (num === 0) {
    return true;
  }
  let i = 1, j = Math.ceil(num / 2);
  let mid;
  while (i <= j) {
    mid = Math.round((i + j) / 2);
    if (mid * mid > num) {
      j = mid - 1;
    }
    if (mid * mid < num) {
      i = mid + 1;
    }
    if (mid * mid === num) {
      return true;
    }
  }
  return false;
};