/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function (head, n) {
  if (!head) {
    return head;
  }
  let p = head, q = head, r = head;
  let step = 0;
  while (q) {
    q = q.next;
    step++;
    if (step > n) {
      p = p.next;
    }
    if (step > n + 1) {
      r = r.next;
    }
  }
  if (p === head) {
    return p.next;
  }
  r.next = p.next;
  p.next = null;
  return head;
};

// function ListNode(val, next) {
//   this.val = (val === undefined ? 0 : val);
//   this.next = (next === undefined ? null : next);
// }

// const list = new ListNode(1,
//   new ListNode(2,
//     // new ListNode(3,
//     //   new ListNode(4,
//     //     new ListNode(5)
//     //   )
//     // )
//   )
// );

// removeNthFromEnd(list, 1);
