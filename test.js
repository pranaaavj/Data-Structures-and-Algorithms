class Graph {
  constructor() {
    this.adjList = {};
  }

  insertVertex(vertex) {
    this.adjList[vertex] = [];
  }

  insertEdges(v1, v2) {
    this.adjList[v2].push(v1);
    this.adjList[v1].push(v2);
  }

  showGraph() {
    console.log(this.adjList);
  }

  bfs(queue = [], visited = {}) {
    if (!queue.length) return;

    let cur = queue.shift();
    visited[cur] = true;

    console.log(cur);

    for (const neighbor of this.adjList[cur]) {
      if (!visited[neighbor]) {
        queue.push(neighbor);
        visited[neighbor] = true;
      }
    }

    this.bfs(queue, visited);
  }
}

const graph = new Graph();

['1', '2', '3', '4'].forEach((vertex) => graph.insertVertex(vertex));

graph.insertEdges('1', '2');
graph.insertEdges('2', '3');
graph.insertEdges('3', '4');
graph.insertEdges('4', '1');
graph.insertEdges('1', '3');

graph.showGraph();

graph.bfs(['1']);
