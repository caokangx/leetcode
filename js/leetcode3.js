/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  if(!s) {
    return 0;
  }
 let p = 0, q = 1;
 let maxLength = 1;
 const set = new Set(s[p]);
 while(q < s.length) {
   if(!set.has(s[q])) {
     set.add(s[q]);
     q++;
     maxLength = Math.max(maxLength, q - p);
   }
   else {
     set.delete(s[p]);
     p++;
   }
 }
 return maxLength
};

lengthOfLongestSubstring("pwwkew");