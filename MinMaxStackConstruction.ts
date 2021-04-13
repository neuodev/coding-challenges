class Stack {
  items = [];
  min = null;
  max = null;

  push(val) {
    this.items.push(val);
    if (this.items.length === 1) {
      this.min = val;
      this.max = val;
      return;
    }
    this.findMinMax();
  }

  findMinMax() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      if (item < this.min) this.min = item;
      if (item > this.max) this.max = item;
    }
  }

  pop() {
    return this.items.pop();
  }

  peak() {
    return this.items[this.items.length - 1];
  }
}

const stack = new Stack();

stack.push(5);
stack.push(7);
stack.push(2);
// console.log(stack.pop());
console.log(stack.min);
console.log(stack.max);
console.log(stack.peak());
console.log(stack);
