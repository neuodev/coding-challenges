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
var detectCycle = function (head) {
  if (!head || !head.next) return null;

  let intersection = detectCycleHelper(head);
  if (!intersection) return null;

  while (head !== intersection) {
    head = head.next;
    intersection = intersection.next;
  }

  return head;
};

const detectCycleHelper = head => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return slow;
  }

  return null;
};
