/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function (ransomNote, magazine) {
  const map = {};
  magazine.split('').forEach(char => {
    if (map[char] === undefined) {
      map[char] = 1;
    }
    else {
      map[char] += 1;
    }
  });
  let result = true;
  ransomNote.split('').forEach(char => {
    if (map[char] > 0) {
      map[char] -= 1;
      return;
    }
    result = false;
  });
  return result;
};
