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
