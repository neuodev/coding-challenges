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

  // Dijkstra's Algorithm
  shortestDistance(from: string, to: string) {
    let fromNode = this.graph[from];
    let toNode = this.graph[to];
    if (!fromNode || !toNode) return;

    let distances = this._initDistance();
    distances[fromNode.label] = 0;
    let previousNodes = {};
    let visited = new Set();
    let PQ = new PriorityQueue();
    PQ.enqueue(fromNode.label, 0);
    while (!PQ.isEmpty()) {
      let current = this.graph[PQ.dequeue().val];
      visited.add(current.label);
      for (let n of current.neighbours) {
        if (visited.has(n.to.label)) continue;
        let newDistance = distances[current.label] + n.weight;

        if (newDistance < distances[n.to.label]) {
          distances[n.to.label] = newDistance;
          previousNodes[n.to.label] = current.label;
          PQ.enqueue(n.to.label, n.weigh);
        }
      }
    }

    return distances[to];
  }

  _initDistance() {
    let distances = {};
    for (let n in this.graph) {
      distances[n] = Infinity;
    }
    return distances;
  }
}

const graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');
graph.addEdge('A', 'B', 3);
graph.addEdge('A', 'D', 2);
graph.addEdge('A', 'C', 4);
graph.addEdge('B', 'E', 1);
graph.addEdge('B', 'D', 6);
graph.addEdge('D', 'E', 5);
graph.addEdge('D', 'C', 1);
graph.print();
graph.shortestDistance('A', 'E');

// let PQ = new PriorityQueue();
// PQ.enqueue('B', 3);
// PQ.enqueue('C', 4);
// PQ.enqueue('D', 2);
