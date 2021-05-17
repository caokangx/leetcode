/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let p = headA, q = headB;
  while (p && q) {
    p = p.next;
    q = q.next;
  }
  let count = 0;
  // p 长
  if (p) {
    while (p) {
      p = p.next;
      count++;
    }
    p = headA;
    q = headB;
    while (count) {
      p = p.next;
      count--;
    }
  }
  // q 长
  else if (q) {
    while (q) {
      q = q.next;
      count++;
    }
    p = headA;
    q = headB;
    while (count) {
      q = q.next;
      count--;
    }
  }
  // 一样长
  else {
    p = headA;
    q = headB;
  }
  while (p && q) {
    if (p === q) {
      return p;
    }
    p = p.next;
    q = q.next;
  }
};