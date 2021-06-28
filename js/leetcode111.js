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
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) {
    return 0;
  }
  return dfs(root, 1);
};

function dfs(node, depth) {
  if (node && !node.left && !node.right) {
    return depth;
  }
  if (node.left && node.right) {
    return Math.min(dfs(node.left, depth + 1), dfs(node.right, depth + 1));
  }
  if (node.left) {
    return dfs(node.left, depth + 1);
  }
  if (node.right) {
    return dfs(node.right, depth + 1);
  }
}