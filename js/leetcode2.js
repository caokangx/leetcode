
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

var addTwoNumbers = function (l1, l2) {
  //reverse l1
  let l1Length = countLength(l1);
  let l2Length = countLength(l2);

  //add 
  let flag = 0;
  let longList, shortList;
  if (l1Length < l2Length) {
    longList = l2;
    shortList = l1;
  }
  else {
    longList = l1;
    shortList = l2;
  }

  p = longList;
  q = shortList;

  while (p.next) {
    const tempRes = p.val + q.val + flag;
    p.val = tempRes % 10;
    flag = Math.floor(tempRes / 10);
    p = p.next;
    q = q.next || { val: 0 };
  }
  const tempRes = p.val + q.val + flag;
  p.val = tempRes % 10;
  flag = Math.floor(tempRes / 10);
  if (flag) {
    p.next = { val: 1, next: null };
    p = p.next;
  }
  [l1, _] = reverseList(longList);
  return l1;
};

var reverseList = function (l1) {
  let p = l1;
  let q = p.next;
  let r = q ? q.next : null;
  let l1Length = 1;
  p.next = null;
  while (r) {
    q.next = p;
    p = q;
    q = r;
    r = r.next;
    l1Length++;
  }
  q.next = p;
  l1 = q ? q : p;
  return [l1, l1Length];
};

const countLength = function (l1) {
  let length = 0;
  while (l1) {
    length++;
    l1 = l1.next;
  }
  return length;
};

const l1 = new ListNode(
  2,
  new ListNode(
    4,
    new ListNode(
      3,
      
    )
  )
);
const l2 = new ListNode(
  5,
  new ListNode(
    6,
    new ListNode(
      4,
      
    )
  )
);

const res = addTwoNumbers(l1, l2);
console.log(res);