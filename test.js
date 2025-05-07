class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    this.adjList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjList[v1].push(v2);
    this.adjList[v2].push(v1);
  }

  cycleExist() {
    
  }

  findAllPaths(vertex, target, path = '', visited = {}) {
    if (vertex === target) return console.log(path + ' ' + vertex);

    for (let neighbor of this.adjList[vertex]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        this.findAllPaths(neighbor, target, path + ' ' + vertex, visited);
        visited[neighbor] = false;
      }
    }
  }

  printGraph() {
    for (let [key, list] of Object.entries(this.adjList)) {
      console.log(`${key} => ${list.join(', ')}`);
    }
  }
}

const graph = new Graph();

['1', '2', '3', '4', '5'].forEach((v) => graph.addVertex(v));

graph.addEdge('1', '2');
graph.addEdge('2', '3');
graph.addEdge('2', '4');
graph.addEdge('3', '4');
graph.addEdge('3', '5');
graph.addEdge('4', '5');

graph.findAllPaths('1', '5');
