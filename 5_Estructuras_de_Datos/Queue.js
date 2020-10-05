class Queue{ 
    constructor(){ 
        this.collection = [];
    }
    enqueue(item){  //agregar a la cola

        // porque aqui usamos metodos de la pila?
        this.collection.push(item);
        return this.collection.length;

    }
    dequeue(){  //remover el primer elemento de la cola.
        return this.collection.shift();
    }
    length(){ 
        return this.collection.length;
    }
    isEmpty(){ 
        // es decir, retorna el valor de la comparacion, si es true, pues la long es cero y esta vacia.
        return this.collection.length === 0;
    }
    front(){ //trae el peek o primer elemento
        return this.collection[0];
    }
}

const filaDeAsesorias = new Queue();

console.log(filaDeAsesorias.enqueue('federico'));
filaDeAsesorias.enqueue('Gera');
filaDeAsesorias.enqueue('cesra');
filaDeAsesorias.enqueue('keneth');

/* setInterval(function(){ 
    if(!filaDeAsesorias.isEmpty()){
        console.log('atendiendo a: ', filaDeAsesorias.dequeue()); 
        console.log('quedan por atender a: ', filaDeAsesorias.length());
        console.log('esperando a: ', filaDeAsesorias.front());

    }else{ 
        console.log('pase con la recepcionista para agendar una asesoria');
    }
}, 2000); */