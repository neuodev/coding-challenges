class Queue {
  queue = [];
  s1 = [];
  s2 = [];

  enqueue(value: number) {
    this.queue.push(value);
    this.s1.push(value);
  }
  dequeue() {
    if (this.s2.length === 0) {
      while (this.s1.length !== 0) {
        this.s2.push(this.s1.pop());
      }
    }
    return this.s2.pop();
  }

  isEmpty() {
    return this.s1.length === 0 && this.s2.length === 0;
  }

  peek() {
    return this.queue[0];
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.isEmpty());
