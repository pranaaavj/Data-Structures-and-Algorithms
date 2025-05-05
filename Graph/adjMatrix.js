class Graph {
  constructor(size) {
    this.size = size;
    this.matrix = Array.from({ length: size }, () => Array(size).fill(0));
  }

  addEdge(u, v) {
    this.matrix[u][v] = 1;
    this.matrix[v][u] = 1;
  }

  bfs(start) {
    let visited = Array.from({ length: this.size }).fill(false);
    let queue = [start];
    visited[start] = true;

    while (queue.length) {
      let node = queue.shift();

      console.log(node);
      for (let i = 0; i < this.matrix[node].length; i++) {
        if (this.matrix[node][i] === 1 && !visited[i]) {
          queue.push(i);
          visited[i] = true;
        }
      }
    }
  }

  showList() {
    console.log(this.matrix);
  }
}

const graph = new Graph(5);

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 4);

graph.showList();

graph.bfs(0);
