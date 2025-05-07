class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let current = this.root;

    // Traverse the trie, creating nodes as needed
    for (let char of word) {
      if (!current.children.has(char)) {
        current.children.set(char, new TrieNode());
      }
      current = current.children.get(char);
    }

    // Mark the end of the word
    current.isEndOfWord = true;
  }

  search(word) {
    const node = this._findNode(word);
    return node !== null && node.isEndOfWord;
  }

  startsWith(prefix) {
    return this._findNode(prefix) !== null;
  }

  _findNode(prefix) {
    let current = this.root;

    for (let char of prefix) {
      if (!current.children.has(char)) {
        return null;
      }
      current = current.children.get(char);
    }

    return current;
  }

  _collectWords(node, prefix, words) {
    // If this node is an end of word, add the prefix to results
    if (node.isEndOfWord) {
      words.push(prefix);
    }

    // Explore all children recursively
    for (const [char, childNode] of node.children) {
      this._collectWords(childNode, prefix + char, words);
    }
  }

  autocomplete(prefix) {
    const node = this._findNode(prefix);

    if (!node) {
      return [];
    }

    const words = [];
    this._collectWords(node, prefix, words);
    return words;
  }

  delete(word) {
    return this._deleteHelper(this.root, word, 0);
  }

  _deleteHelper(node, word, index) {
    // Base case: reached the end of the word
    if (index === word.length) {
      // Word doesn't exist in the trie
      if (!node.isEndOfWord) {
        return false;
      }

      // Mark as not end of word
      node.isEndOfWord = false;

      // Return true if this node has no children (can be deleted)
      return node.children.size === 0;
    }

    const char = word[index];
    const childNode = node.children.get(char);

    // Word doesn't exist in the trie
    if (!childNode) {
      return false;
    }

    // Recursively delete in child
    const shouldDeleteChild = this._deleteHelper(childNode, word, index + 1);

    // If child can be deleted (has no children and is not end of word)
    if (shouldDeleteChild) {
      node.children.delete(char);
      // Return true if this node can also be deleted
      return !node.isEndOfWord && node.children.size === 0;
    }

    return false;
  }
}

// Example usage
function demonstrateTrie() {
  const trie = new Trie();

  // Insert words
  const words = [
    'apple',
    'application',
    'apply',
    'banana',
    'ball',
    'cat',
    'car',
  ];
  for (const word of words) {
    trie.insert(word);
  }

  console.log('Search for "apple":', trie.search('apple')); // true
  console.log('Search for "app":', trie.search('app')); // false
  console.log('Starts with "app":', trie.startsWith('app')); // true

  console.log('Autocomplete "app":', trie.autocomplete('app')); // ['apple', 'application', 'apply']
  console.log('Autocomplete "ba":', trie.autocomplete('ba')); // ['banana', 'ball']

  console.log('Deleting "apple":', trie.delete('apple')); // true
  console.log('Search for "apple" after deletion:', trie.search('apple')); // false
  console.log('Autocomplete "app" after deletion:', trie.autocomplete('app')); // ['application', 'apply']
}

// Run the demonstration
demonstrateTrie();
