/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const map1 = {}, map2 = {};
  s.split('').forEach(char => {
    if (map1[char] === undefined) {
      map1[char] = 0;
      return;
    }
    map1[char] += 1;
  });
  t.split('').forEach(char => {
    if (map2[char] === undefined) {
      map2[char] = 0;
      return;
    }
    map2[char] += 1;
  });
  let flag = true;
  Object.keys(map1).forEach(key => {
    if (map2[key] === map1[key]) {
      return;
    }
    flag = false;
  });
  Object.keys(map2).forEach(key => {
    if (map2[key] === map1[key]) {
      return;
    }
    flag = false;
  });
  return flag;
};