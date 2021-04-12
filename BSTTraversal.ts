import BST from './BSTConstruction';

const bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(1);
bst.insert(5);
bst.insert(13);
bst.insert(22);
// bst.insert(14);
// bst.insert(12);

preOrder(bst.root);
inOrder(bst.root);
postOrder(bst.root);
function preOrder(root) {
  let array = [];
  preOrderHelper(root, array);
  console.log(array);
  return array;
}

function preOrderHelper(node, array) {
  if (!node) return;
  array.push(node.data);
  preOrderHelper(node.left, array);
  preOrderHelper(node.right, array);
}

function inOrder(root) {
  let array = [];
  inOrderHelper(root, array);
  console.log(array);
  return array;
}

function inOrderHelper(node, array) {
  if (!node) return;
  inOrderHelper(node.left, array);
  array.push(node.data);
  inOrderHelper(node.right, array);
}

function postOrder(root) {
  let array = [];
  postOrderHelper(root, array);
  console.log(array);
  return array;
}

function postOrderHelper(node, array) {
  if (!node) return;
  postOrderHelper(node.left, array);
  postOrderHelper(node.right, array);
  array.push(node.data);
}
