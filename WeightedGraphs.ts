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

let graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addEdge('A', 'B', 2);
graph.addEdge('A', 'C', 2);
graph.print();
console.log(graph.graph);
