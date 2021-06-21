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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const result = [];
  function dfs(node, path) {
    if (!node) {
      return;
    }
    path.push(node.val);
    if (node && !node.left && !node.right) {
      result.push(path);
      return;
    }
    dfs(node.left, [...path]);
    dfs(node.right, [...path]);
  }
  dfs(root, []);
  return result.map(item => item.join('->'));
};
