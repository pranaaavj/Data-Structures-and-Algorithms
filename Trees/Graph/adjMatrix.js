class Graph {
  constructor(size) {
    this.size = size;
    this.matrix = Array.from({ length: size }, () => Array(size).fill(0));
  }

  addEdge(u, v) {
    this.matrix[u][v] = 1;
    this.matrix[v][u] = 1;
  }
}

const graph = new Graph(5);

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 4);

graph.bfs(0);
