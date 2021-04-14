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
    let removed = this.values.pop();
    this.bubbleDown();
    return removed;
  }

  bubbleDown() {
    let idx = 0;
    let len = this.values.length;
    let ele = this.values[idx];
    while (idx < len) {
      let swapIdx = null;
      if (
        this._leftChildIdx(idx) < len &&
        this._leftChild(idx).priority < ele.priority
      ) {
        swapIdx = this._leftChildIdx(idx);
      }
      console.log({
        L: this._leftChildIdx(idx),
        R: this._rightChildIdx(idx),
      });

      if (
        (swapIdx === null && this._rightChildIdx(idx) < len) ||
        (swapIdx !== null &&
          this._rightChildIdx(idx) < len &&
          this._rightChild(idx).priority < this._leftChild(idx).priority)
      ) {
        swapIdx = this._rightChildIdx(idx);
      }
      if (swapIdx === null) break;
      this._swap(idx, swapIdx);
      idx = swapIdx;
    }

    return this.values;
  }

  _leftChildIdx(idx: number) {
    return idx * 2 + 1;
  }
  _rightChildIdx(idx: number) {
    return idx * 2 + 2;
  }

  _leftChild(idx: number) {
    return this.values[this._leftChildIdx(idx)];
  }
  _rightChild(idx: number) {
    return this.values[this._rightChildIdx(idx)];
  }

  _swap(i: number, j: number) {
    [this.values[i], this.values[j]] = [this.values[j], this.values[i]];
  }
}

const PQ = new PriorityQueue();
PQ.enqueue('A', 5);
PQ.enqueue('B', 1);
PQ.enqueue('C', -1);
PQ.enqueue('M', 20);
PQ.enqueue('S', 60);
console.log(PQ.dequeue());
console.log(PQ.dequeue());
console.log(PQ.dequeue());
console.log(PQ.dequeue());
console.log(PQ.dequeue());

console.log(PQ.values);
