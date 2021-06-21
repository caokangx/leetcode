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
var countNodes = function (root) {
  let node = root;
  let depth = 1;
  while (node) {
    if(node.right) {
      node = node.right;
      depth++;
    }
    else if(node.left) {
      node = node.left;
      depth++;
    }
  }
  let result = 0;
  for(let i = 0; i < depth; i++) {
    result += Math.pow(2, i);
  }
  
};