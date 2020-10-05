// bts -> binary tree search

// elemento que va a conformar el arbol
class Node{ 
    constructor(data, leftSon, rigthSon){ 
        this.data = data;
        this.leftSon = leftSon;
        this.rigthSon = rigthSon;
    }
}

// definicion del arbol.
class Tree{ 
    constructor(){ 
        this.root = null;
    }
    /*  los metodos principales del arbol son:

    *add: agregar un dato
    *contains -> verificar si un nodo existe respecto a un dato

    */
   add(data){ 
       if(!this.root){ 
           let node = new Node(data, null, null);
           this.root = node;
       }else { 
           let currentNode = this.root;
           let node = new Node(data, null, null);
           let flag = false;
           while(flag === false){ 
               if(node.data < currentNode.data){ 
                   if(currentNode.leftSon === null){ 
                       currentNode.leftSon = node;
                       currentNode = currentNode.leftSon;
                       flag = true;
                   }else { 
                       currentNode = currentNode.leftSon;
                   }
               }else if(node.data >= currentNode.data){ 
                   if(currentNode.rigthSon === null){ 
                       currentNode.rigthSon = node;
                       currentNode = currentNode.rigthSon;
                       flag = true;
                   }else{ 
                       currentNode = currentNode.rigthSon;
                   }
               }
               
           
       }
     }
   }

   contains(data){
        let currentNode = this.root;
        while(currentNode !== null){
            
            if(data === currentNode.data){
                return true; 
            }else{
             if(data < currentNode.data){ 
                currentNode = currentNode.leftSon;    
            }else{ 
                currentNode = currentNode.rigthSon;
            }
          }
        }
        return false;
    }
}

let Barbol = new Tree();



Barbol.add(10);
Barbol.add(5);
Barbol.add(20);
Barbol.add(8);
Barbol.add(4);
Barbol.add(30);
Barbol.add(15);

console.log(Barbol);

console.log(Barbol.contains(5));

