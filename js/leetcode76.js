/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function (s, t) {
    let i = 0, j = 0;
    let minLength = 10000000;
    const map = {};
    const set = new Set();
    t.split('').forEach(char => {
      if(map[char] === undefined) {
        map[char] = 1;
      }
      else {
        map[char] += 1;
      }
      set.add(char);
    })
    const length = set.size;
    let left;
    set.clear();
    while (i < s.length && j < s.length) {
      while (i < s.length && set.size < length) {
        if (map[s[i]] !== undefined) {
          map[s[i]] -= 1;
          map[s[i]] <= 0 && set.add(s[i]);
          if (set.size === length) {
            if(minLength > (i - j + 1)) {
              minLength = i - j + 1;
              left = j;
            }
          }
        }
        i++;
      }
      while(j < i && set.size === length) {
        if(map[s[j]] !== undefined) {
          map[s[j]] += 1;
          if(map[s[j]] > 0) {
            set.delete(s[j]);
          }
        }
        j++;
        if (set.size === length) {
          if(minLength > (i - j)) {
            minLength = i - j;
            left = j;
          }
        }
      }
    }
    if(minLength === 10000000) {
      return '';
    }
    return s.substr(left, minLength);
  };
  minWindow('aa', 'aa');
  