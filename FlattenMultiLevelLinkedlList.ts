type ListNode = {
  value: any;
  next: ListNode;
  prev: ListNode;
  child: ListNode;
};

// O(1) space | O(n) time
function flattenLinkedList(head: ListNode) {
  if (head == null) return head;
  let current = head;
  while (current !== null) {
    if (current.child) {
      let next = current.next;
      let tail = current.child;
      while (tail.next !== null) {
        tail = tail.next;
      }
      current.next = current.child;
      current.next.prev = current;
      current.child = null;
      tail.next = next;
      if (next !== null) {
        next.prev = tail;
      }
    } else {
      current = current.next;
    }
  }

  return head;
}
