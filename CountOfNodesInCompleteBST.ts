type TreeNode = {
  val: number;
  right: TreeNode;
  left: TreeNode;
};

function numberOfNodes(root: TreeNode) {
  if (!root) return 0;
  let height = preOrder(root);
  let upperNodes = Math.pow(2, height - 1) - 1;
}

function preOrder(root: TreeNode, height: number = 0) {
  if (root.left === null) return;
  preOrder(root.left, ++height);
  return height;
}
