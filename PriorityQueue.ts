class PriorityQueue {
  values;
  constructor() {
    this.values = [];
  }

  enqueue(val: string, priority: number) {
    this.values.push({ val, priority });
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    let ele = this.values[idx];

    while (idx > 0) {
      let parentIdx = this._parent(idx);
      let parent = this.values[parentIdx];
      if (ele.priority >= parent.priority) break;
      this.values[parentIdx] = ele;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  _parent(idx: number) {
    return Math.floor((idx - 1) / 2);
  }

  isEmpty() {
    return this.values.length === 0;
  }

  dequeue() {
    if (this.isEmpty()) return null;
    if (this.values.length === 1) return this.values.pop();
    this._swap(0, this.values.length - 1);
    console.log(this.values);
    let removed = this.values.pop();
    return removed;
  }

  

  _swap(i: number, j: number) {
    [this.values[i], this.values[j]] = [this.values[j], this.values[i]];
  }
}

const PQ = new PriorityQueue();
PQ.enqueue('A', 5);
PQ.enqueue('B', 1);
PQ.enqueue('C', -1);
console.log(PQ.dequeue());

console.log(PQ.values);
