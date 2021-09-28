class Vertex {
    constructor(props) {
        this.label = props;
    }
}

class Graph {
    edges = 0;
    adj = [];
    marked = [];

    constructor(props) {
        this.vertices = props;
        this.init();
    }

    init() {
        for (var i = 0; i < this.vertices; ++i) {
            this.adj[i] = [];
            this.marked[i] = false;
            this.adj[i].push("");
        }
    }

    addEdge(w, v) {
        if (!this.adj[v].includes(w)) {
            this.adj[v].push(w);
        }
        if (!this.adj[w].includes(v)) {
            this.adj[w].push(v);
        }

        this.edges++;
    }

    showGraph() {
        for (let i = 0; i < this.vertices; i++) {
            let str = i + ' => '
            for (let j = 0; j < this.vertices; j++) {
                if (this.adj[i][j] !== undefined) str += this.adj[i][j] + ','
            }
            console.log(str)
        }
    }

    dfs(v) {
        this.marked[v] = true;
        let path = []
        if (this.adj[v] !== undefined) {
            console.log("Visited vertex: " + v)
            path.push(v)
        }
        this.adj[v].forEach((w) => {
            if (w !== '' && !this.marked[w]) {
                path = path.concat(this.dfs(w))
            }
        })
        return path
    }
    bfs(s) {
        this.edgeTo = [];
        let queue = [s];
        let path = [];

        this.marked[s] = true;

        while (queue.length > 0) {
            const v = queue.shift()
            this.adj[v].slice(1).forEach(w => {
                if (!this.marked[w]) {
                    queue.push(w)
                    console.log(`edgeTo[${w}] = ${v}`)
                    this.edgeTo[w] = v
                    this.marked[w] = true;
                }
            })
            path.push(v)
        }

        console.log(this.edgeTo)
        return path
    }
    hasPathTo(v) {
        return this.marked[v]
    }
    pathTo(v) {
        const source = 0;
        if (!this.hasPathTo(v)) {
            return 
        }

        const path = []
        for (let i = v; i != source; i = this.edgeTo[i]) {
            path.push(i);
        }

        path.push(source)
        return path;
    }
}

const g = new Graph(3);
g.addEdge(0, 1);
g.addEdge(1, 2);
g.addEdge(0, 2);



g.showGraph();

g.bfs(0);
console.log("shortest", g.pathTo(2))