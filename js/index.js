
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const creatTree = function (src) {
  let root = new TreeNode();
  let result = new TreeNode();
  result = null;
  let queue = [];
  for (let i = 0; i < src.length; i++) {
    if (i == 0) {
      root = new TreeNode(src[i]);
      result = root;
      queue.push(root);
    }
    if (queue.length) {
      root = queue.shift();
    } else {
      break;
    }
    if (i + 1 < src.length && src[i + 1] !== null) {
      root.left = new TreeNode(src[i + 1]);
      queue.push(root.left);
    }
    if (i + 2 < src.length && src[i + 2] !== null) {
      root.right = new TreeNode(src[i + 2]);
      queue.push(root.right);
    }
    i = i + 1;
  }
  return result;
};
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) {
    return true;
  }
  const leftQueue = [];
  const rightQueue = [];
  leftQueue.push(root.left);
  rightQueue.push(root.right);

  while (leftQueue.length || rightQueue.length) {
    const length1 = leftQueue.length;
    const length2 = rightQueue.length;
    if (length1 !== length2) {
      return false;
    }
    for (let i = 0; i < length2; i++) {
      node1 = leftQueue.shift();
      node2 = rightQueue.shift();
      if (!node1 && !node2) {
        continue;
      }
      if (!node1 || !node2) {
        return false;
      }
      if (node1.val !== node2.val) {
        return false;
      }
      leftQueue.push(node1.left);
      leftQueue.push(node1.right);
      rightQueue.push(node2.right);
      rightQueue.push(node2.left);
    }
  }
  return true;
};
function lastItem(arr) {
  if (!arr.length) {
    return -10000;
  }
  return arr[arr.length - 1];
}

const list = creatTree([1, 2, 2, null, 3, null, 3]);

isSymmetric(list);
