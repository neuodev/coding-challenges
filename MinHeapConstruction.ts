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

  remove() {
    this._swap(0, this.values.length - 1);
    let removedNode = this.values.pop();
    this.bubbleDown();
    console.log(removedNode);
    return removedNode;
  }
  bubbleDown() {
    var idx = 0;
    var length = this.values.length;
    var element = this.values[0];
    while (true) {
      var leftChildIdx = 2 * idx + 1;
      var rightChildIdx = 2 * idx + 2;
      var leftChild, rightChild;
      var swap = null;
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild < element) {
          swap = leftChildIdx;
        }
      }

      if (
        (rightChildIdx < length && swap === null) ||
        (swap !== null && rightChild < leftChild)
      ) {
        // inside the boundary
        swap = rightChildIdx;
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
    console.log(this.values);
    return this.values;
  }
  _validParent(idx) {
    let firstChildIdx = idx * 2 + 1;
    let secondChildIdx = firstChildIdx + 1;
    let firstChild = this.values[firstChildIdx];
    let secondChild = this.values[secondChildIdx];
    let parent = this.values[idx];
    return parent <= firstChild && parent <= secondChild;
  }
  _getRightChildIdx(idx) {
    return idx * 2 + 2;
  }
  _getLeftChildIdx(idx) {
    return idx * 2 + 2;
  }
  _righChild(idx) {
    return this.values[this._getRightChildIdx(idx)];
  }
  _leftChild(idx) {
    return this.values[this._getLeftChildIdx(idx)];
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
minHeap.remove();
// console.log(minHeap.values);
