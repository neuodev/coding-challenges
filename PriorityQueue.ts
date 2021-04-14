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
  _parent(idx) {
    return Math.floor((idx - 1) / 2);
  }
}
