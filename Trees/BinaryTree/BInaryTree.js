class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    this.root = this._insertNode(this.root, value);
  }

  findHeight(root = this.root) {
    if (root === null) return -1;

    let left = this.findHeight(root.left);
    let right = this.findHeight(root.right);

    return Math.max(left, right) + 1;
  }

  convertToArray(root = this.root) {
    if (root == null) {
      return root;
    }

    let result = [];
    let queue = [root];
    while (queue.length) {
      let current = queue.shift();

      if (current) {
        result.push(current.val);
        queue.push(current.left || null);
        queue.push(current.right || null);
      } else {
        result.push(null);
      }
    }

    while (result[result.length - 1] === null) {
      result.pop();
    }

    console.log(result);
    return result;
  }

  findSecondLargest(root = this.root) {
    if (!root || (!root.right && !root.left)) return null;

    if (!root.right) {
      let current = root.left;
      while (current && current.right) {
        current = current.right;
      }

      return current.val;
    }

    if (root.right && !root.right.right && !root.right.left) {
      return root.val;
    }

    return this.findSecondLargest(root.right);
  }

  printOrder(root = this.root) {
    const queue = [root];
    console.log(root.val)
    while (queue.length > 0) {
      let current = queue.shift();

      if (current.left) {
        queue.push(current.left);
        console.log(current.left.val);
      }
      if (current.right) {
        queue.push(current.right);
        console.log(current.right.val);
      }
    }
  }

  _insertNode(root, value) {
    if (root === null) {
      return new TreeNode(value);
    }

    if (value > root.val) {
      root.right = this._insertNode(root.right, value);
    }

    if (value < root.val) {
      root.left = this._insertNode(root.left, value);
    }

    return root;
  }

  calculateSum(root = this.root) {
    if (root === null) return 0;

    let left = this.calculateSum(root.left);
    let right = this.calculateSum(root.right);

    return left + right + 1;
  }

  print(node = this.root, prefix = '', isLeft = true) {
    if (!node) return;

    const vertical = '\u2502';
    const leftBranch = '\u2514\u2500\u2500';
    const rightBranch = '\u250C\u2500\u2500';

    if (node.right) {
      this.print(
        node.right,
        prefix + (isLeft ? vertical + '   ' : '    '),
        false
      );
    }

    console.log(prefix + (isLeft ? leftBranch : rightBranch) + ' ' + node.val);

    if (node.left) {
      this.print(
        node.left,
        prefix + (isLeft ? '    ' : vertical + '   '),
        true
      );
    }
  }
}

const BTree = new BinarySearchTree();

BTree.insert(10);
BTree.insert(5);
BTree.insert(15);
BTree.insert(12);
BTree.insert(20);
BTree.insert(17);

BTree.printOrder();

BTree.print();
