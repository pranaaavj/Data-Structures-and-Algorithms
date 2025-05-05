class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(vertex) {
    this.adjList.set(vertex, []);
  }

  addEdges(v1, v2) {
    this.adjList.get(v1).push(v2);
    this.adjList.get(v2).push(v1);
  }

  bfsRecursive(queue = [], visited = {}) {
    if (!queue.length) return;

    let node = queue.shift();
    console.log(node);

    visited[node] = true;

    for (let neighbor of this.adjList.get(node)) {
      if (!visited[neighbor]) {
        queue.push(neighbor);
        visited[neighbor] = true;
      }
    }

    this.bfsRecursive(queue, visited);
  }

  bfsIterative(start) {
    let queue = [start];
    let visited = {};

    while (queue.length) {
      let vertex = queue.shift();
      visited[vertex] = true;
      console.log(vertex);

      for (let neighbor of this.adjList.get(vertex)) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }
  }

  dfsRecursive(node, visited = {}) {
    if (!node || visited[node]) return;

    visited[node] = true;
    console.log(node);

    for (let neighbor of this.adjList.get(node)) {
      if (!visited[neighbor]) {
        this.dfs(neighbor, visited);
      }
    }
  }

  dfsIterative(node) {
    let stack = [node];
    let visited = {};

    while (stack.length) {
      let current = stack.pop();
      visited[node] = true;

      console.log(current);

      for (let neighbor of this.adjList.get(current)) {
        if (!visited[neighbor]) {
          stack.push(neighbor);
          visited[neighbor] = true;
        }
      }
    }
  }

  showList() {
    console.log(this.adjList);
  }
}

const graph = new Graph();

graph.addVertex('1');
graph.addVertex('2');
graph.addVertex('3');
graph.addVertex('4');

graph.addEdges('1', '2');
graph.addEdges('1', '4');
graph.addEdges('1', '3');
graph.addEdges('2', '3');
graph.addEdges('4', '3');

graph.showList();

graph.bfsRecursive(['1']);
