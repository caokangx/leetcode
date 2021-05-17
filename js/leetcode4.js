/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function (nums1, nums2) {
  const total = nums1.length + nums2.length;
  let arr = null;
  // 单数组
  if (nums1.length === 0) {
    arr = nums2;
  }
  if (nums2.length === 0) {
    arr = nums1;
  }
  if (arr) {
    const median = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
      return (arr[median] + arr[median - 1]) / 2;
    }
    else {
      return arr[median];
    }
  }
  if (nums1.length === 1 && nums2.length === 1) {
    return (nums1[0] + nums2[0]) / 2;
  }
  let p = q = 0;
  // 双数
  if ((total % 2) === 0) {

    const medianIndex = total / 2;
    let count = 0;
    let median = 0;
    let sum = 0;
    while (p < nums1.length || q < nums2.length) {
      const n1 = nums1[p];
      const n2 = nums2[q];
      let currentNum;
      if ((n1 <= n2 && p < nums1.length) || q === nums2.length) {
        p++;
        currentNum = n1;
      }
      else {
        q++;
        currentNum = n2;
      }
      count++;
      if (count === medianIndex) {
        sum += currentNum;
      }
      if (count === medianIndex + 1) {
        return (sum + currentNum) / 2;
      }
    }
  }
  // 单数
  else {
    let count = 0;
    let num = Math.min(nums1[0], nums2[0]);
    const medianIndex = Math.floor(total / 2) + 1;
    while (p < nums1.length || q < nums2.length) {
      if (count === medianIndex) {
        return num;
      }
      if ((nums1[p] <= nums2[q] && p < nums1.length) || q === nums2.length) {
        num = nums1[p];
        count++;
        p++;
      }
      else {
        num = nums2[q];
        count++;
        q++;
      }

    }
  }
};

findMedianSortedArrays(
  [100001],
  [100000]
);