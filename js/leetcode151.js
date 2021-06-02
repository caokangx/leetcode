/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function (s) {
  let subString = '';
  const list = [];
  let i = 0;
  while (i < s.length) {
    if (s[i] !== ' ') {
      subString += s[i];
    }
    else {
      if (subString) {
        list.push(subString);
        subString = '';
      }
    }
    i++;
  }
  if (subString) {
    list.push(subString);
  }
  let result = '';
  for (let j = list.length - 1; j >= 0; j--) {
    result += list[j];
    (j > 0) && result += ' ';
  }
  return result;
};

