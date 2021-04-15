class Queue {
  in = [];
  out = [];
  enqueue(value: number) {
    // time : O(1)
    this.in.push(value);
  }
  dequeue() {
    // time O(n)
    if (this.out.length === 0) {
      while (this.in.length !== 0) {
        this.out.push(this.in.pop());
      }
    }

    return this.out.pop();
  }

  isEmpty() {
    return this.in.length === 0 && this.out.length === 0;
  }

  peek() {
    if (this.out.length === 0) {
      while (this.in.length !== 0) {
        this.out.push(this.in.pop());
      }
    }

    return this.out[this.out.length - 1];
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
