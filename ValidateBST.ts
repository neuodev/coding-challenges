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
bst.insert(14);
bst.insert(12);

function validateBST(root, parent = null, type = null) {
  if (!root) return;

  if (type == 'left' && root.data > parent.data) {
    return false;
  }
  if (type == 'right' && root.data < parent.data) {
    return false;
  }
  validateBST(root.left, root, 'left');
  validateBST(root.right, root, 'right');

  return true;
}
console.log(validateBST(bst.root));

const validateBST = function (root) {
  return validateBSTHelper(root, -Infinity, Infinity);
};

function validateBSTHelper(tree, minValue, maxValue) {
  if (!tree) return true;
  if (tree.data < minValue || tree.data >= maxValue) return false;
  return (
    validateBSTHelper(tree.left, minValue, tree.data) &&
    validateBSTHelper(tree.right, tree.data, maxValue)
  );
}
validateBST(bst.root);
