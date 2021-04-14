function cycleDetection(graph) {
  let visited = new Set();
  for (let node in graph) {
    let current = graph[node];
    if (
      visited.has(current.label) &&
      cycleDetectionHelper(current, visited, '', graph)
    ) {
      return true;
    }
  }

  return false;
}

function cycleDetectionHelper(node, visited, from, graph) {
  visited.add(node.label);
  let adjacencyList = node.adjacencyList;
  for (let n of adjacencyList) {
    if (n.to === from) continue;
    if (visited.has(n.to)) return true;
    let nextNode = graph[n.to];
    if (cycleDetectionHelper(nextNode, visited, node.label, graph)) {
      return true;
    }
  }

  return false;
}
