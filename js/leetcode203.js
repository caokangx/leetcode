/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
  
  var removeElements = function (head, val) {
    const dummy = new ListNode(0, head);
    let p = dummy, q = dummy.next;
    while(q) {
      if(q.val === val) {
        q = q.next;
        p.next = q;
      }
      else {
        p = q;
        q = q.next;
      }
    }
    return dummy.next;
  };