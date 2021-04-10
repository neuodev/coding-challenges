// O(n) time and O(n) space 
function branchSum(root) {
  let sums = [];
  calcBranchSum(root, 0, sums);
  return sums;
}

function calcBranchSum(node, sum, results) {
  if (!node) {
    results.push(sum);
    return;
  }
  sum += node.val;
  calcBranchSum(node.left, sum, results);
  calcBranchSum(node.right, sum, results);
}
