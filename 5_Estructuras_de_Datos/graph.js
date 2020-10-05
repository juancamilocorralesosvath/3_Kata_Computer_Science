// asi se hace una matriz en JS
/* const directedGraph = [ 
    [0,1,1,0,0],
    [0,0,1,0,1],
    [0,0,0,1,0],
    [0,0,0,0,1],
    [0,0,0,0,0],
];
console.log(directedGraph); */
class Node{ 
    constructor(data){ 
        this.data = data;
    }
}

//grafo dirigido
class Graph{ 

     constructor(){ 
         this.nodes = [];
        //  los edges son las parejas (las relaciones que existen)
         this.edges = [];
     }
     addNode(data){ //agregar nodo
        let node = new Node(data);
        //como nodes es mi arreglo de nodos, simplemente agrego el nuevo nodo a lo ultimo. 
        this.nodes.push(node);
     }

     getNode(data){ //conseguir un nodo
        if(this.nodes.length === 0){
            return null;
        }
        for(let i = 0; i < this.nodes.length; i++){ 
            if(this.nodes[i].data === data){ 
                return this.nodes[i]
            }
        }
        return null;
     }

     addEdge(data1, data2){ //agregar arista o relacion
        let node1 = this.getNode(data1);
        let node2 = this.getNode(data2);

        let edge = [node1, node2];

        this.edges.push(edge);
     }

     getIndex(data){ 
         if(this.nodes.length === 0){ 
             return null;
         }
         for(let i = 0; i < this.nodes.length; i++){
             if(this.nodes[i].data === data){
                 return i; 
             } 
         }
         return null;
     }

     print(){ // imprimir las relaciones del grafo
        for(let i = 0; i < this.edges.length; i++){ 
            console.log(`${this.edges[i][0].data} -------> ${this.edges[i][1].data}`);
        } 

     }
}
const myGraph = new Graph();
myGraph.addNode('Gera');
myGraph.addNode('Federico');
myGraph.addEdge('Gera','Federico');
myGraph.addNode('Mali');
myGraph.addEdge('Mali','Federico');
myGraph.addNode('Maui');
myGraph.addEdge('Maui','Federico');
myGraph.addNode('Juan Camilo');
myGraph.addNode('Ulma');
myGraph.addNode('Alexis');
myGraph.addNode('Margarito');
myGraph.addEdge('Maui','Margarito');
myGraph.addEdge('Maui','Juan Camilo');
myGraph.addEdge('Margarito','Juan Camilo');
myGraph.addEdge('Ulma','Alexis');

myGraph.print();

let myGraphD = new Graph();
myGraphD.addNode(1);
myGraphD.addNode(2);
myGraphD.addNode(3);
myGraphD.addNode(4);
myGraphD.addNode(5);

myGraphD.addEdge(2, 3);
myGraphD.addEdge(2, 5);
myGraphD.addEdge(3, 4);
myGraphD.addEdge(4, 5);
myGraphD.addEdge(1, 2);
myGraphD.addEdge(1, 3);

myGraphD.print();
console.log(myGraphD.edges);
console.log(myGraphD.nodes);

const adjacencyMatrix = (graph) => { 
    let matrix = [];
    for(let i = 0; i < graph.nodes.length; i++){ 
        let row = [];
        for(let j = 0; j < graph.nodes.length; j++){ 
            row.push(0);
        } 
        matrix.push(row);      
    }
    //agregamos las relaciones
    for(let i = 0; i < graph.nodes.length; i++){ 
        let currentNode = graph.nodes[i];
        for(let j = 0; j < graph.edges.length; j++){ 
            if(graph.edges[j][0].data === currentNode.data){ 
                let row = matrix[i];
                let conectedNode = graph.edges[j][1];
                row[graph.getIndex(conectedNode.data)] = 1;
            }
        }
    }   
    return matrix;
}

console.log('matriz de adyacencias de myGraphD', adjacencyMatrix(myGraphD));