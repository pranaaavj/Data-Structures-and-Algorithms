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

  bfs(start) {
    let queue = [start];
    let visited = {};

    while (queue.length) {
      let vertex = queue.shift();

      if (!visited[vertex]) {
        visited[vertex] = true;

        console.log(vertex);

        let neighbors = this.adjList.get(vertex);
        for (let neighbor of neighbors) {
          if (!visited[neighbor]) {
            queue.push(neighbor);
          }
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

graph.bfs('1');
