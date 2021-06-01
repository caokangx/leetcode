/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
 var fourSumCount = function (nums1, nums2, nums3, nums4) {
  const length = nums1.length;
  const map1 = {}, map2 = {};

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      const sum1 = nums1[i] + nums2[j];
      const sum2 = nums3[i] + nums4[j];
      if (map1[sum1] === undefined) {
        map1[sum1] = 1;
      }
      else {
        map1[sum1] += 1;
      }
      if (map2[sum2] === undefined) {
        map2[sum2] = 1;
      }
      else {
        map2[sum2] += 1;
      }
    }
  }
  let result = 0;
  Object.keys(map1).forEach(sum1 => {
    if (map2[-sum1] !== undefined) {
      result += map1[sum1] * map2[-sum1];
    }
  });
  return result;
};

// fourSumCount([-1, -1], [-1, 1], [-1, 1], [1, -1]);