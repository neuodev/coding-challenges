type TreeNode = {
  val: any;
  right: TreeNode;
  left: TreeNode;
};

function rightView(root: TreeNode) {
  let res = [];
  let level = 0;
  perOrder(root, level, res);
  return res;
}

function perOrder(root: TreeNode, level: number, res: number[]) {
  if (!root) return;
  perOrder(root.right, level++, res);
  perOrder(root.left, level++, res);
  if (level >= length) res.push(root.val);
}
