type ListNode = {
  value: any;
  next: ListNode;
};

function cycleDetection(head: ListNode) {
  let first = head;
  let second = head.next;

  while (first && second.next && second.next.next) {
    if (first.value === second.value) return true;
    first = first.next;
    second = second.next.next;
  }
  return false;
}
