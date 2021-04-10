/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  let stack = [];
  let output = [];

  if (!root) return output;

  stack.push(root);
  while (stack.length != 0) {
    let node = stack.pop();
    output.push(node.val);
    node.children = node.children.reverse();
    for (let i = 0; i < node.children.length; i++) {
      stack.push(node.children[i]);
    }
  }

  return output;
};
