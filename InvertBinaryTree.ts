import BST from './BSTConstruction';
const bst = new BST();
bst.insert(1);
bst.insert(2);
bst.insert(3);
bst.insert(4);
bst.insert(5);
bst.insert(6);
bst.insert(7);
bst.insert(8);
bst.insert(9);

function invertBST(root) {
  if (!root) return root;
  let queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let currentNode = queue.pop();
    if (currentNode.right) queue.push(currentNode.right);
    if (currentNode.left) queue.push(currentNode.left);
    swapChildren(currentNode);
  }
}

function swapChildren(node) {
  const temp = node.left;
  node.left = node.right;
  node.right = temp;
}
