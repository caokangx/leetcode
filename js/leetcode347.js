/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function (nums, k) {
  const map = {};
  nums.forEach(num => {
    if (map[num] === undefined) {
      map[num] = 1;
      return;
    }
    map[num] += 1;
  });
  const list = [];
  Object.keys(map).forEach(key => {
    list.push({
      key,
      value: map[key]
    });
  });
  let i = 0, j = list.length - 1;
  qsortOnce(list, i, j, k);
  return list.slice(0, k).map(item => item.key);
};
function qsortOnce(list, i, j, k) {
  let temp = list[i];
  while (i < j) {
    while (i < j && list[j].value <= temp.value) {
      j--;
    }
    list[i] = list[j];
    while (i < j && list[i].value >= temp.value) {
      i++;
    }
    list[j] = list[i];
  }
  list[i] = temp;
  if (i < k) {
    qsortOnce(list, i + 1, list.length - 1, k);
  }
  if (i > k) {
    qsortOnce(list, 0, i - 1, k);
  }
  if (i === k) {
    return;
  }
}

topKFrequent([1,1,1,2,2,3], 2);