/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const { length } = prices;
  const minVal = new Array(length);
  minVal[0] = prices[0];
  let result = 0;
  for (let i = 1; i < length; i++) {
    minVal[i] = Math.min(prices[i], minVal[i - 1]);
    result = Math.max(result, prices[i] - minVal[i]);
  }
  return result;
};