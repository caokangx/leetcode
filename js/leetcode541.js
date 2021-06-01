/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var reverseStr = function (s, k) {
  const { length } = s;
  s = s.split('');
  let i = 0;
  while (i * 2 * k < length) {
    let start = i * 2 * k;
    let end = Math.min(start + k - 1, length - 1);
    reverse(s, start, end);
    i++;
  }
  return s.join('');
};

function reverse(s, start, end) {
  while (start < end) {
    swap(s, start, end);
    start++;
    end--;
  }
}

function swap(s, start, end) {
  const temp = s[start];
  s[start] = s[end];
  s[end] = temp;
}

reverseStr("abcdefg", 2);