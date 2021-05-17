/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const map = {};
  const result = [];
  nums1.forEach((number) => {
    if (map[number] === undefined) {
      map[number] = 1;
    }
    else {
      map[number] += 1;
    }
  });
  nums2.forEach(number => {
    if (map[number] !== undefined) {
      result.push(number);
      map[number] = undefined;
    }
  });
  return result;
};