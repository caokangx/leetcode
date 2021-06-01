/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const map = {};
  let res = n;
  while (true) {
    res = calculate(res);
    if (map[res] !== undefined) {
      return false;
    }
    else {
      map[res] = true;
    }
    if (res === 1) {
      return true;
    }
  }
};

function calculate(n) {
  let sum = 0;
  let char;
  while (n > 0) {
    char = n % 10;
    sum += char * char;
  }
  return sum;
}