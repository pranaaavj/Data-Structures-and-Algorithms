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
    this.adjList.get(v2).push(v1);
  }

  hasCycle() {
    const visited = {};
    let first = Array.from(this.adjList.keys())[0];

    let stack = [first];
    while (stack.length) {
      let cur = stack.pop();

      visited[cur] = true;
      
      for (const neighbor of this.adjList.get(cur)) {
        if (!visited[neighbor]) {
          stack.push(neighbor);
          
        }
      }
    }
  }
}

const g = new Graph();
['1', '2', '3', '4'].forEach((v) => g.addVertex(v));

g.addEdge('1', '2');
g.addEdge('2', '3');
g.addEdge('3', '1');
g.addEdge('3', '4');

console.log(g.hasCycle());
