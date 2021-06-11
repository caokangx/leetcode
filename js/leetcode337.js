/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
  return tranverse(root, 0, true);
};

function tranverse(node, current, canRob) {
  if (!node) {
    return current;
  }
  if (node.robMaxValue === undefined) {
    node.robMaxValue = node.val + tranverse(node.left, 0, false) + tranverse(node.right, 0, false);
  }
  if (node.noRobMaxValue === undefined) {
    node.noRobMaxValue = tranverse(node.left, 0, true) + tranverse(node.right, 0, true);
  }
  if (canRob) {

    return Math.max(
      current + node.robMaxValue,
      current + node.noRobMaxValue
    );
  }
  else {
    return current + node.noRobMaxValue;
  }
}