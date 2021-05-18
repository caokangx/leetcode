/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function (matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let top = 0, bottom = m - 1, left = 0, right = n - 1;
    let current = 0;
    let result = [];
    while (current < m * n) {
      for(let i = left; i <= right; i++) {
        result.push(matrix[top][i]);
        current++;
      }
      top++;
      if(current >= m * n) break;
      for(let i = top; i <= bottom; i++) {
        result.push(matrix[i][right]);
        current++;
      }
      right--;
      if(current >= m * n) break;
      for(let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
        current++;
      }
      bottom--;
      if(current >= m * n) break;
      for(let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
        current++;
      }
      left++;
      if(current >= m * n) break;
    }
    return result
  };
  spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]);
  