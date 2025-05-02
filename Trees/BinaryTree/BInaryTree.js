class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    this.root = this._insertNode(this.root, value);
  }

  findHeight(root = this.root) {
    if (root === null) return 0;

    let left = this.findHeight(root.left);
    let right = this.findHeight(root.right);

    if (!root.left && !root.right) {
      return left + right + 1;
    } else {
      return left + right;
    }
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
    console.log(root.val);
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

  sumNodes(root = this.root) {
    if (!root) return -1;

    return Math.max(this.sumNodes(root.left), this.sumNodes(root.right)) + 1;
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

const BTree = new BinaryTree();

BTree.insert(50);
BTree.insert(60);
BTree.insert(66);
BTree.insert(52);
BTree.insert(54);
BTree.insert(30);
BTree.insert(45);
BTree.insert(35);
BTree.insert(10);
BTree.insert(5);

BTree.print();

console.log(BTree.sumNodes());
