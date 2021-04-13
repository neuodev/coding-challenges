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

  _insert(root: AVLNode, val: number) {
    if (root === null) return new AVLNode(val);
    if (val < root.value) {
      root.left = this._insert(root.left, val);
    } else {
      root.right = this._insert(root.right, val);
    }
    // calc the height
    root.height = Math.max(this.height(root.left), this.height(root.right)) + 1;

    this.balance(root);
    return root;
  }

  private balance(node: AVLNode) {
    // balanceFactor = height(L) - height(R)
    // >= 1 left heavy
    // <= -1 right heavy
    if (this.isLeftHeavy(node)) {
      console.log(`${node.value} left Heavy`);
    }
    if (this.isRightHeavy(node)) {
      console.log(`${node.value} right Heavy`);
    }
  }

  private isLeftHeavy(node: AVLNode) {
    return this.balanceFactor(node) > 1;
  }
  private isRightHeavy(node: AVLNode) {
    return this.balanceFactor(node) < -1;
  }

  private balanceFactor(node: AVLNode) {
    return node === null ? 0 : this.height(node.left) - this.height(node.right);
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
