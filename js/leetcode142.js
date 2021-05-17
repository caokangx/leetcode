/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    let p = head;
    let q = head;
    let common;
    while(p && q && q.next) {
      p = p.next;
      q = q.next.next;
      if(p === q) {
        common = p;
        break;
      }
    }
    if(!common) {
      return null;
    }
    else {
      p = head;
      while(true) {
        if(p === common) {
          return p;
        }
        p = p.next;
        common = common.next;
      }
    }
};