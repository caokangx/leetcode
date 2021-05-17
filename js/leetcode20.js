/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function (s) {
  const stack = new Array();
  let flag = true;
  s.split('').every((letter) => {
    if (letter === '[' || letter === '(' || letter === '{') {
      stack.push(letter);
    }
    else {
      const preLetter = stack.pop();
      if (letter !== map[preLetter]) {
        flag = false;
        return false;
      }
    }
    return true;
  });
  if (stack.length || flag === false) {
    return false;
  }
  return true;
};

const map = {
  '[': ']',
  '(': ')',
  '{': '}'
};
