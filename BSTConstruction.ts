// Average: time = o(log(b)) , space = O(log(n))
// Worst: time: O(n) , Space = O(n)

class NodeClass {
  data;
  right;
  left;
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}

class BST {
  root;
  constructor() {
    this.root = null;
  }

  insert(data) {
    let node = new NodeClass(data);
    if (!this.root) {
      this.root = node;
    } else {
      let current = this.root;
      while (true) {
        if (data < current.data) {
          if (current.left) {
            current = current.left;
          } else {
            current.left = node;
            return;
          }
        } else {
          if (current.right) {
            current = current.right;
          } else {
            current.right = node;
            return;
          }
        }
      }
    }
    return node;
  }

  search(value) {
    if (!value) return null;
    let current = this.root;
    while (current) {
      if (value < current.data) {
        current = current.left;
      } else if (value > current.data) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  delete(value) {
    if (value == null) return false;
    let current = this.root;
    let parent = null;
    while (current) {
      if (value < current.data) {
        if (current.left) {
          parent = current;
          current = current.left;
        }
      } else if (value > current.data) {
        if (current.right) {
          parent = current;
          current = current.right;
        }
      } else {
        if (current.left && current.right) {
          let smallest = this._findSmallest(current.right);
          current.data = smallest.data;
        } else {
          parent.left.data === value
            ? (parent.left = null)
            : (parent.right = null);
        }

        return;
      }
    }
  }
  _findSmallest(root) {
    let current = root;
    while (current.left && current.left.left) {
      current = current.left;
    }
    let temp = current.left;
    current.left = null;
    return temp;
  }
}

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
console.log(bst.delete(1));
console.log(bst.search(1));
