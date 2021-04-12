function BFS(root) {
  if (root == null) return;
  let queue = [root];
  let output = [];
  while (queue.length > 0) {
    let current = queue.shift();
    output.push(current.value);
    let len = current.children.length;
    for (let i = 0; i < len; i++) {
      queue.push(current.children[i]);
    }
  }
  return queue;
}
