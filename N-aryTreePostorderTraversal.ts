/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
  let stack = [];
  let outputArr = [];
  if (root == null) return outputArr;

  stack.push(root);
  while (stack.length > 0) {
    let node = stack.pop();
    outputArr.unshift(node.val);
    for (let i = 0; i < node.children.length; i++) {
      stack.push(node.children[i]);
    }
  }
  return outputArr;
};
