/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function (height) {
  const { length } = height;
  if (length <= 1) {
    return 0;
  }
  let p = 0, q = length - 1;
  let volume = Math.min(height[p], height[q]) * (q - p);
  while (p < q) {
    if (height[p] < height[q]) {
      p++;
    }
    else {
      q--;
    }
    volume = Math.max(volume, Math.min(height[p], height[q]) * (q - p));
  }
  return volume;
};