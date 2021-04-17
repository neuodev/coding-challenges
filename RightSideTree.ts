type TreeNode = {
  val: any;
  right: TreeNode;
  left: TreeNode;
};
function rightSideTree(root: TreeNode) {
  if (!root) return [];
  if (!root.right && !root.right) return [root];
  let queue = [root];
  let res = [];
  let count = 0;
  // when the count == queue.length -> that mean that you are in the last node of the level witch is the right node
  while (queue.length) {
    let current = queue.shift();
    count++;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
    if (count === queue.length) {
      res.push(current.val);
      count = 0;
    }
  }
}


 