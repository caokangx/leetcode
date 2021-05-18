/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let i = s.length - 1, j = t.length - 1;
  let skipi = 0, skipj = 0;
  while (i >= 0 || j >= 0) {
    let tempi, tempj;
    while (i >= 0) {
      if (s[i] === '#') {
        skipi++;
        i--;
      }
      else if (s[i] !== '#' && skipi !== 0) {
        skipi--;
        i--;
      }
      else if (s[i] !== '#' && skipi === 0) {
        tempi = s[i];
        i--;
        break;
      }
    }
    while (j >= 0) {
      if (t[j] === '#') {
        skipj++;
        j--;
      }
      else if (t[j] !== '#' && skipj !== 0) {
        skipj--;
        j--;
      }
      else if (t[j] !== '#' && skipj === 0) {
        tempj = t[j];
        j--;
        break;
      }
    }
    if (tempi === tempj) {
      continue;
    }
    else {
      return false;
    }
  }
  return true;
};
backspaceCompare("bbbextm", "bbb#extm");