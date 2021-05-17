/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function (l1, l2) {
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }
  let p = l1, q = l2;
  while (p && q) {
    if (p.val < q.val) {
      const temp = p;
      p = p.next;
      temp.next = p && q && (p.val < q.val ? p : q) || q;
    }
    else {
      const temp = q;
      q = q.next;
      temp.next = p && q && (p.val < q.val ? p : q) || p;
    }
  }
  if (l1.val < l2.val) {
    return l1;
  }
  else {
    return l2;
  }
};
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

// const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
// const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
// console.log(mergeTwoLists(l1, l2).toString());