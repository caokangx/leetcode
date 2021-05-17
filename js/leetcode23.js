/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function (lists) {
  const points = [];
  lists.forEach(list => {
    let p = list;
    points.push(p);
  });
  const { minPoint: result } = findMinPointInList(points);
  while (true) {
    const { minVal, minPoint, minIndex } = findMinPointInList(points);
    if (!minPoint) {
      break;
    }
    // 最小节点前移一位
    points[minIndex] = points[minIndex].next;
    // 找到最小节点应该依附的下一个节点（即现在的最小节点）
    const { minPoint: nextIndex } = findMinPointInList(points);
    minPoint.next = nextIndex;
  }
  return result;
};
function findMinPointInList(list) {
  let minVal = 10000000000;
  let minPoint = null;
  let minIndex = -1;
  // 找到当前最小节点
  list.forEach((point, index) => {
    if (point) {
      if (point.val < minVal) {
        minVal = point.val;
        minPoint = point;
        minIndex = index;
      }
    }
  });
  return { minVal, minPoint, minIndex };
}

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

const l1 = new ListNode(1,
  new ListNode(4,
    new ListNode(5)
  )
);
const l2 = new ListNode(1,
  new ListNode(3,
    new ListNode(4)
  )
);
const l3 = new ListNode(2,
  new ListNode(6)
);

mergeKLists([l1, l2, l3]);