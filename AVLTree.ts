class AVLNode {
  left: AVLNode;
  right: AVLNode;
  height: number;
  constructor(public value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 0;
  }
}

class AVLTree {
  root: AVLNode;
  constructor() {
    this.root = null;
  }

  insert(val: number) {
    this.root = this._insert(this.root, val);
  }

  _insert(root, val) {
    if (root === null) return new AVLNode(val);
    if (val < root.val) {
      root.left = this._insert(root.left, val);
    } else {
      root.right = this._insert(root.right, val);
    }

    return root;
  }

  print() {
    let array = [];
    function preOrder(node) {
      if (!node) return;
      array.push(node.value);
      preOrder(node.left);
      preOrder(node.right);
    }
    preOrder(this.root);
    console.log(array);
    return array;
  }
}

const avlTree = new AVLTree();
avlTree.insert(20);
avlTree.insert(10);
avlTree.insert(30);
console.log(avlTree.print());