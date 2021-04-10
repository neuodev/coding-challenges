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
var insertionSortList = function (head) {
  if (!head) {
    return head;
  }
  if (!head.next) {
    head;
  }
  let sorted = head;
  head = head.next;
  sorted.next = null;
  // console.log(head,sorted)
  while (head) {
    let temp = sorted;
    let prev = null;
    while (temp && temp.val < head.val) {
      prev = temp;
      temp = temp.next;
    }
    if (!prev) {
      prev = head;
      head = head.next;
      prev.next = temp;
      sorted = prev;
    } else {
      let next = prev.next;
      prev.next = head;
      head = head.next;
      prev.next.next = next;
    }

    // console.log(head,sorted)
  }
  return sorted;
};
