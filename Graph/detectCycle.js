class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjList.has(vertex)) {
      this.adjList.set(vertex, []);
    }
  }

  addEdge(v1, v2) {
    this.adjList.get(v1).push(v2);
  }

  hasCycle(vertex) {
    console.log(vertex);
    const visited = {};
    const queue = [vertex];

    while (queue.length) {
      let current = queue.shift();

      visited[current] = true;

      for (const neighbor of this.adjList.get(current)) {
        if (!visited[neighbor]) {
          queue.push(neighbor);
        } else {
          return true;
        }
      }
    }
    return false;
  }
}

const g = new Graph();
['1', '2', '3', '4'].forEach((v) => g.addVertex(v));

g.addEdge('1', '2');
g.addEdge('2', '3');
g.addEdge('3', '4');

console.log(g.hasCycle('1'));
