/**
 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function (n) {
    const result = [];
    for (let i = 0; i < n; i++) {
      let row = [];
      for (let j = 0; j < n; j++) {
        row.push(0);
      }
      result.push(row);
    }
    let current = 1;
    let top = 0, bottom = n - 1, left = 0, right = n - 1;
    while (current <= n * n) {
      for (let i = left; i <= right; i++) {
        result[top][i] = current;
        current++;
      }
      top++;
      for (let i = top; i <= bottom; i++) {
        result[i][right] = current;
        current++;
      }
      right--;
      for (let i = right; i >= left; i--) {
        result[bottom][i] = current;
        current++;
      }
      bottom--;
      for (let i = bottom; i >= top; i--) {
        result[i][left] = current;
        current++;
      }
      left++;
    }
    return result;
  };
  
  // generateMatrix(3);