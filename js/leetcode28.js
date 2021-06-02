/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function (haystack, needle) {
  const { length } = needle;
  if(!length) {
    return 0;
  }
  const next = new Array(length + 1);
  for (let j = 0, i = 1; i < length; i++) {
    while (j > 0 && needle[i] !== needle[j]) {
      j = next[j - 1];
    }
    if (needle[i] === needle[j]) {
      j++;
    }
    next[i] = j;
  }

  for (let i = 1, j = 0; i < haystack.length; i++) {
    while (j > 0 && haystack[i] !== needle[j]) {
      j = next[j - 1];
    }
    if (haystack[i] === needle[j]) {
      j++;
    }
    if (j === needle.length) {
      return i - j + 1;
    }
  }
  return -1;
};

strStr("hello", "ll");