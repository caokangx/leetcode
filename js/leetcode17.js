
const map = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z']
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const result = [];
  if(!digits.length) {
    return result;
  }
  function dfs(current, digitsIndex, mapIndex) {
    if (current.length === digits.length) {
      result.push(current.join(''));
      return;
    }
    const digit = map[digits[digitsIndex]][mapIndex];
    current.push(digit);
    dfs(current, digitsIndex + 1, 0);
    current.pop();
    mapIndex + 1 < map[digits[digitsIndex]].length && dfs(current, digitsIndex, mapIndex + 1);
  }
  const e = new Error();
  dfs([], 0, 0);
  return result;
};

console.log(letterCombinations("23"));
