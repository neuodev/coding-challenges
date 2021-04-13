class Vertix {
  neighbours: Edge[];
  constructor(public label: string) {
    this.label = label;
    this.neighbours = [];
  }
}

class Edge {
  constructor(public from: Vertix, public to: Vertix, public weight: number) {
    this.from = from;
    this.to = to;
    this.weight = weight;
  }
}
