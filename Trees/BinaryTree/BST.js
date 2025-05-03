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

  insert(val) {
    this.root = this._insert(this.root, val);
  }

  _insert(root, val) {
    if (!root) return new TreeNode(val);

    if (root.val === val) {
      console.log('Value already exist');
      return root;
    }

    if (root.val < val) {
      root.right = this._insert(root.right, val);
    }

    if (root.val > val) {
      root.left = this._insert(root.left, val);
    }

    return root;
  }

  insertIterative(value) {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;

    while (current) {
      if (current.val > value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }

        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
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

  heightOfNode(target, root = this.root) {
    if (!root) return 0;

    if (root.val === target) {
      return this.findHeight(root);
    }

    if (root.left) {
      return this.heightOfNode(target, root.left);
    }

    if (root.right) {
      return this.heightOfNode(target, root.right);
    }
  }

  findHeight(root = this.root) {
    if (!root) return -1;

    return (
      Math.max(this.findHeight(root.left), this.findHeight(root.right)) + 1
    );
  }

  search(target, root = this.root) {
    if (!root) return false;

    if (root.val === target) return true;

    return this.search(target, root.left) || this.search(target, root.right);
  }

  printInOrder(root = this.root) {
    if (!root) return;

    this.printInOrder(root.left);
    console.log(root.val);
    this.printInOrder(root.right);
  }

  deleteNode(target) {
    this.root = this._deleteNode(target);
    return this.root;
  }

  _deleteNode(target, root = this.root) {
    if (!root) return null;

    if (target > root.val) {
      root.right = this._deleteNode(target, root.right);
    } else if (target < root.val) {
      root.left = this._deleteNode(target, root.left);
    } else {
      if (!root.left && !root.right) return null;

      if (this.height(root.right) > this.height(root.left)) {
        let node = this.findSucc(root.right);
        root.val = node.val;
        root.right = this._deleteNode(node.val, root.right);
      } else {
        let node = this.findPre(root.left);
        root.val = node.val;
        root.left = this._deleteNode(node.val, root.left);
      }
    }
    return root;
  }

  findSucc(root) {
    while (root && root.left) {
      root = root.left;
    }
    return root;
  }

  findPre(root) {
    while (root && root.right) {
      root = root.right;
    }
    return root;
  }

  height(root) {
    if (!root) return 0;

    return Math.max(this.height(root.left), this.height(root.right)) + 1;
  }
}

const BTree = new BinarySearchTree();

BTree.insert(10);
BTree.insert(20);
BTree.insert(30);
BTree.insert(40);
BTree.insert(50);
BTree.insert(60);
BTree.insert(70);

console.log(BTree.findHeight());

BTree.print();
