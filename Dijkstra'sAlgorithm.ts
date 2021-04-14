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

class Vertix {
  neighbours: Edge[];
  constructor(public label: string) {
    this.label = label;
    this.neighbours = [];
  }
  addEdge(to: Vertix, weight: number) {
    let newEdge = new Edge(this, to, weight);
    this.neighbours.push(newEdge);
  }
}

class Edge {
  constructor(public from: Vertix, public to: Vertix, public weight: number) {
    this.from = from;
    this.to = to;
    this.weight = weight;
  }
}

class Graph {
  graph = {};

  addNode(value) {
    this.graph[value] = new Vertix(value);
  }

  addEdge(from: string, to: string, weight: number) {
    if (from == to || !this.graph[from] || !this.graph[to]) return false;
    this.graph[from].addEdge(this.graph[to], weight);
    this.graph[to].addEdge(this.graph[from], weight);
  }

  print() {
    let output = new Set();
    for (const node in this.graph) {
      for (const edge of this.graph[node].neighbours) {
        output.add(`${edge.from.label} -> ${edge.to.label} W:${edge.weight}`);
      }
    }
    console.log(output);
  }
}
