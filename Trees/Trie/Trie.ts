class TrieNode {
  children: TrieNode[] | null[];
  EOW: boolean;

  constructor() {
    this.children = Array.from({ length: 30 }, () => null);
    this.EOW = false;
  }
}

class Trie {
  root: TrieNode | null;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string) {
    let current: TrieNode | null = this.root;

    for (let i = 0; i < word.length; i++) {
      let index = word[i].charCodeAt(0) - 97;
      if (current?.children[index] === null) {
        const node = new TrieNode();
        current.children[index] = node;
      }
      current = current?.children[index] || null;
    }

    if (current) {
      current.EOW = true;
    }
  }
}

const trie = new Trie();

trie.insert('there');
trie.insert('their');
trie.insert('hello');

function printTrieVertical(
  node: TrieNode | null,
  prefix: string = '',
  isLast: boolean = true
) {
  if (!node) return;

  const children = node.children
    .map((child, index) => ({ child, char: String.fromCharCode(index + 97) }))
    .filter((entry) => entry.child !== null);

  children.forEach((entry, i) => {
    const isLastChild = i === children.length - 1;
    const connector = isLastChild ? '└──' : '├──';
    const childPrefix = prefix + (isLast ? '    ' : '│   ');
    const eowMark = entry.child!.EOW ? ' (EOW)' : '';

    console.log(prefix + connector + entry.char + eowMark);
    printTrieVertical(entry.child, childPrefix, isLastChild);
  });
}

printTrieVertical(trie.root);
