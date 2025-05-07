class TrieNode {
  constructor() {
    this.children = {};
    this.EOW = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;

    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }

    node.EOW = true;
  }

  search(word) {
    let current = this.root;

    for (const letter of word) {
      if (!current.children[letter]) return false;
      current = current.children[letter];
    }

    return current.EOW;
  }

  autocomplete(prefix) {
    let current = this.root;
    for (let char of prefix) {
      if (!current.children[char]) return;
      current = current.children[char];
    }

    let words = [];

    const dfs = (node, prefix, words) => {
      if (node.EOW) words.push(prefix);

      for (let [char, children] of Object.entries(node.children)) {
        dfs(children, prefix + char, words);
      }
    };

    dfs(current, prefix, words);

    return words;
  }

  show() {
    console.log(this.root);
  }
}

const trie = new Trie();

trie.insert('there');
trie.insert('their');
trie.insert('them');
trie.insert('thryaregood');

function printTrie(node, prefix = '') {
  if (!node) return;

  for (const [char, child] of Object.entries(node.children || {})) {
    console.log(`${prefix}└── ${char}`);
    printTrie(child, prefix + '    ');
  }

  if (node.isEndOfWord) {
    console.log(`${prefix}(end)`);
  }
}

console.log(trie.autocomplete('the'));
