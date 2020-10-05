/* 
el nodo es la informacion del elemento y su apuntador o enlace se refiere al siguiente elemento */

class Node{ 
    constructor(data){
        // en data guardamos cualquier objeto que queremos
        this.data = data;
        // es quien nos indica el siguiente nodo, inicamos con uno que por defecto esta nulo
        this.next = null; 

    }
}
/* 
  *LinkedList*
  
una lista ligada debe tener:  ~una cabecera (head), que nos indica el inicio de la lista.
~el size de la lista (length)

tambien, tienen tres comportamientos esenciales: 
~insertar (add) 
  -al inicio
  -al final
  -en medio
~borrar (delete)
~buscar u obtener (indice)


*/


class LinkedList{ 
    // estas son las propiedades de mi lista
    constructor(){ 
        this.head = null;
        this.length = 0;
    }
        // estos son los métodos o comportamientos de mi lista

    isEmpty(){
        // es decir, si el head es nulo, es porque mi lista esta vacia, y lo unico que hago es devolver el valor de la comparacion (true-false) 
        return this.head === null;
    }

    addAtEnd(data){
        console.log("add: "+ data);
        const node = new Node(data); //tonces aqui lo que se hace es que se crea un nuevo nodo, con la data que recibe el metodo addAtEnd, y se crea un objeto Node con las caracteristicas: {data: data (la que le pasamos), next: null (no hay nada, por ahora, delante de mi nodo)} 

        if(this.head === null){ 
        this.head = node;
        }else { //es decir, cuando si tenemos un head lleno con data

            let currentNode = this.head; //currentNode es mi indicador de donde estoy.
            //es decir, mientras que si exista un nodo en currentNode.next haga lo del cuerpo
            while(currentNode.next){ 
                currentNode = currentNode.next; //voy moviendo mi apuntador, avanzo, avanzo y avanzo.
            }

            // cuando ya no haya un nodo en currentNode.next, es porque esta vacio, aun no he puesto nada ahi, ahora si, puedo meter la data:
            currentNode.next = node;

        }
        // aumento el size de mi lista
        this.length++;

    }

    addAtStart(data){ 

        const node = new Node(data);
        /* 
        si this.head es nulo, eso lo convierte en falsy, por lo que la evaluacion en el if me dara falso, por eso lo tengo que negar, para asi decir: 'cuando sea cierto que el head sea nulo...' 
        this.head = null; falsy -> this.head -> falso*/
        if(!this.head){ 
            this.head = node;
        }else{
            /* que es lo que pasa aqui: como ya hay un head, lo que hago es ahora el apuntador next de mi nodo apuntara hacia el head que hasta el momento tenia, y mi nuevo head es el nodo que agrego. */
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }
    get(index){
        // si no tengo nada en mi lista (length = 0) o el indice es mayor a mi longitud:
        if(this.length === 0 ||index > this.length){
            return null; 
        }else{ 
            // es decir, es como si mi head fuera el uno, y voy avanzando, cuando el contador sea el indice que me pasaron, ese es el nodo que debo devolver.
            let counter = 1;
            let currentNode = this.head;
            while(counter !== index){
                counter++;
                currentNode = currentNode.next; 
            }
            return currentNode;
        }
    }

    delete(data){ 
        // empiezo en mi head, por lo que antes no tengo nada.
        let currentNode = this.head;
        let previousNode = null;
        // si resulta que la data a eliminar es la de mi head
        if(currentNode.data === data){
            // simplemente ahora mi head va a ser el siguiente nodo y ya.
            this.head = this.currentNode.next; 

        }else{ 
            // mientras que no sea la data que busco y tenga donde buscar
            while(currentNode.data !== data && currentNode.next !== null){
                // los voy avanzando
                previousNode = currentNode;
                currentNode = currentNode.next; 

            }

            // en caso de que la data coincida, que pasa, el apuntador del nodo anterior deja de apuntar a mi current para apuntar al dato despues del current, lo que lo desliga, lo 'borra'.
            previousNode.next = currentNode.next;
        }
        // le reduzco la longitud a mi lista.
        this.length--;

        // pero una pregunta, no cubrimos que hacer cuando el caso sea que se acabo donde buscar y resulta que nunca encontramos la data. porque que no hayan mas nodos no significa que se encontro la data, y creo que el codigo esta interpretando eso asi.
    }
}

const listaDeAlumnos = new LinkedList();

listaDeAlumnos.addAtEnd('cesar');
listaDeAlumnos.addAtEnd('juan');
listaDeAlumnos.addAtEnd('marlon');
listaDeAlumnos.addAtEnd('Ulma');
listaDeAlumnos.addAtEnd('margarito');

console.log(listaDeAlumnos);
console.log(listaDeAlumnos.get(3));
listaDeAlumnos.delete('marlon');
console.log(listaDeAlumnos);