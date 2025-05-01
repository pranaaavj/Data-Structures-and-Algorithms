const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

async function buildTree() {
  let nodeVal = await ask('Enter root node value: ');
  let node = new Node(nodeVal);

  let queue = [node];
  while (queue.length) {
    let node = queue.shift();

    let right = await ask(`Enter right value for ${node.val}`);
    if (right !== '0') {
      node.right = new Node(right);
      queue.push(node.right);
    }

    let left = await ask(`Enter left value for ${node.val}`);
    if (left !== '0') {
      node.left = new Node(left);
      queue.push(node.left);
    }
  }

  return node;
}

(async () => {
  console.log('Start building your binary tree:');
  const root = await buildTree();
  console.log('Binary Tree created.');

  printTree(root);
  rl.close();
})();

function printTree(root) {
  if (root == null) return root;

  console.log(root.val);
  printTree(root.left);
  printTree(root.right);
}
