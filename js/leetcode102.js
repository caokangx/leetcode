/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const queue = [];
  root && queue.push(root);
  const result = [];
  while (queue.length) {
    const { length } = queue;
    const row = [];
    for (let i = 0; i < length; i++) {
      const head = queue.shift();
      row.push(head.val);
      head.left && queue.push(head.left);
      head.right && queue.push(head.right);
    }
    result.push(row);
  }
  return result;
};