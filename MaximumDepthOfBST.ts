type TreeNode = {
  val: number;
  right: TreeNode;
  left: TreeNode;
};

function maxDepth(root: TreeNode): number {
  return _DepthFirstSearch(root);
}

function _DepthFirstSearch(node: TreeNode) {
  if (!node) return 0;
  if (!node.right && !node.left) return 1;
  return (
    1 + Math.max(_DepthFirstSearch(node.left), _DepthFirstSearch(node.right))
  );
}
