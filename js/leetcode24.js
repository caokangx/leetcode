/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }
  const dummy = new ListNode(0, head);
  let p = dummy;
  while (p && p.next && p.next.next) {
    let q = p.next;
    let r = q.next;
    let s = r.next;
    p.next = r;
    r.next = q;
    q.next = s;
    p = q;
  }
  return dummy.next;
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

const list = new ListNode(1,
  new ListNode(2,
    new ListNode(3,
      // new ListNode(4)
    )
  )
);
swapPairs(list);
