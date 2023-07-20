// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const graph = new Graph(numCourses);
    
    graph.init(prerequisites);
    
    let canFinish = true;
    
    for(let i = 0; i < numCourses && canFinish; i++) {
        canFinish = canFinish && graph.canFinishFromNode(graph.verticesMap.get(i));
    }
    
    return canFinish;
};

class Graph {
    constructor(n) {
        this.verticesMap = new Map();
        for(let i = 0; i < n; i++) {
            const node = new GraphNode(i);
            this.verticesMap.set(i, node);
        }
    }
    
    init(prerequisites) {
        for(let i = 0; i < prerequisites.length; i++) {
            const itemA = this.verticesMap.get(prerequisites[i][0]);
            const itemB = this.verticesMap.get(prerequisites[i][1]);
            
            itemA.neighbours.push(prerequisites[i][1]);
        }
    }
    
    canFinishFromNode(node) {
        if(node.canIgnore) return true;
        
        if(node.visited) return false;
        node.visited = true;
        
        let canFinish = true;
        
        for(let i = 0; i < node.neighbours.length && canFinish; i++) {
            const neighbour = this.verticesMap.get(node.neighbours[i]);
            canFinish = canFinish && this.canFinishFromNode(neighbour);
        }
        
        if(canFinish) node.canIgnore = true;
        
        return canFinish;
    }
}

class GraphNode {
    constructor(val) {
        this.neighbours = [];
        this.val = val;
        this.visited = false;
        this.canIgnore = false;
    }
}