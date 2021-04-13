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
  // 0 10 2
  //    0 20 1
  //      0 30 0

  _insert(root, val) {
    if (root === null) return new AVLNode(val);
    if (val < root.val) {
      root.left = this._insert(root.left, val);
    } else {
      root.right = this._insert(root.right, val);
    }
    // calc the height
    root.height = Math.max(this.height(root.left), this.height(root.right)) + 1;

    // balanceFactor = height(L) - height(R)
    // >= 1 left heavy
    // <= -1 right heavy
    
    return root;
  }

  private height(node: AVLNode) {
    return node == null ? -1 : node.height;
  }

  print() {
    let array = [];
    function preOrder(node) {
      if (!node) return;
      array.push(`${node.value}-> H:${node.height}`);
      preOrder(node.left);
      preOrder(node.right);
    }
    preOrder(this.root);
    console.log(array);
    return array;
  }
}

const avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
console.log(avlTree.print());
