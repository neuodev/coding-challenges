class MinHeap {
  values = [];
  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    let values = this.values;
    while (idx >= 0 && values[idx] < values[this._parent(idx)]) {
      this._swap(idx, this._parent(idx));
      idx = this._parent(idx);
    }
  }
  _swap(i, j) {
    let values = this.values;
    [values[i], this.values[j]] = [values[j], values[i]];
  }
  _parent(idx) {
    return Math.floor((idx - 1) / 2);
  }
}

let minHeap = new MinHeap();
minHeap.insert(9);
minHeap.insert(12);
minHeap.insert(23);
minHeap.insert(17);
minHeap.insert(18);
minHeap.insert(30);
minHeap.insert(44);
minHeap.insert(102);
minHeap.insert(31);
minHeap.insert(-100);
console.log(minHeap.values);
