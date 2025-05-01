
  // New top-down print method
  printTopDown() {
    if (!this.root) return;

    // Queue for level-order traversal
    const queue = [{ node: this.root, level: 0, position: 0 }];
    const levels = []; // Store nodes by level
    const maxLevel = this._getHeight(this.root); // Max height for spacing
    const maxWidth = Math.pow(2, maxLevel); // Max possible nodes at bottom

    // Collect nodes by level and calculate positions
    while (queue.length > 0) {
      const { node, level, position } = queue.shift();
      if (!levels[level]) levels[level] = [];
      levels[level].push({ node, position });

      // Add children to queue with calculated positions
      if (node.left) {
        queue.push({
          node: node.left,
          level: level + 1,
          position: position * 2,
        });
      }
      if (node.right) {
        queue.push({
          node: node.right,
          level: level + 1,
          position: position * 2 + 1,
        });
      }
    }

    // Print each level
    for (let level = 0; level < levels.length; level++) {
      const nodes = levels[level];
      // Calculate spacing: deeper levels need less space between nodes
      const baseSpacing = Math.floor(maxWidth / Math.pow(2, level + 1));
      let line = '';
      let connectorLine = '';

      // Sort nodes by position to print left to right
      nodes.sort((a, b) => a.position - b.position);

      // Build node and connector lines
      for (let i = 0; i < nodes.length; i++) {
        const { node, position } = nodes[i];
        // Calculate spaces before this node
        const spaces = i === 0 ? baseSpacing * position : baseSpacing;
        line += ' '.repeat(spaces) + node.val;
        // Add connectors for children
        if (level < levels.length - 1) {
          connectorLine += ' '.repeat(spaces);
          connectorLine += node.left ? '/' : ' ';
          connectorLine += ' '.repeat(baseSpacing - 2);
          connectorLine += node.right ? '\\' : ' ';
        }
      }

      // Print the node line
      console.log(line);
      // Print the connector line if there are more levels
      if (connectorLine && level < levels.length - 1) {
        console.log(connectorLine);
      }
    }
  }

  // Helper method to get tree height
  _getHeight(node) {
    if (!node) return 0;
    return (
      1 + Math.max(this._getHeight(node.left), this._getHeight(node.right))
    );
  }