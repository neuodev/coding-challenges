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

  _insert(node, val) {
    if (node === null) return new AVLNode(val);
    if (val < node.val) {
      node.left = this._insert(node.left, val);
    } else node.right = this._insert(node.right, val);

    return node;
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
