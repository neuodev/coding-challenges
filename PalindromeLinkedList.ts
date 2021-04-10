/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // use astack to store the values of the first half and start compare in the second half
  let fast = head;
  let slow = head;
  let stack = [];
  while (fast && fast.next) {
    stack.push(fast.val);

    fast = fast.next.next;
    slow = slow.next;
  }

  if (fast !== null) {
    slow = slow.next;
  }
  while (slow) {
    let node = stack.pop();
    if (slow.val !== node.val) return false;
    slow = slow.next;
  }
  return true;
};
