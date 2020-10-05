const pila = [];

console.log(pila.push('federico'));
console.log(pila.push('alfredo'));
console.log(pila.push('alexis'));

console.log(pila);

console.log(pila.pop());
console.log(pila);

console.log(pila.pop());
console.log(pila);

console.log(pila.pop());
console.log(pila);

const pilaText = [];
const text = `{{}}`;
// estan parejas las llaves en text?
let balanced = true;
// para cada item dentro de mi objeto.
for (const letter of text) {
    // si es una llave abierta la agrego a mi pila
    if(letter === '{'){ 
        pila.push(letter);
        // si es una llave cerrada, evaluo si ya no tengo nada en mi pila, porque de ser asi, eso significa que hay un problema y estan desbalanceadas mis llaves. luego, borro el ultimo item agregado que si todo esta bien, entonces mi pila quedara vacia.
    }else if(letter === '}'){ 
        if(pila.length === 0) balanced = false;
        pila.pop();
    }
}
// si mi pila esta vacia y no se hallo una llave de cierre de mas (estan parejas), tonces todo bien, sino, estan mal.
pila.length === 0 && balanced === true ? console.log('todo esta parejo') : console.log('no esta balanceada mi pila.');



class Stack{ 
    constructor(){ 
        this.count = 0;
        this.storage = {};
    }
    push(nuevoElemento){ //agregar un nuevo elemento
        // al agregar un nuevo elemento pues le sumo al tamano de la pila.
        this.count++;
        console.log('count: ', this.count);
        // ahora, en la posicion en la que estoy AHORA (despues de haber hecho el count++) de mi arreglo de cosas, agrego el nuevo elemento.
        this.storage[this.count] = nuevoElemento;
        // y el comportamiento del metodo es devolver el 'tamano' o la cuenta de los objetos que se han agregado
                return this.count;

    }
    pop(){ //pop devuelve el ultimo elemento agregado y lo elimina.
        if(this.count === 0){
            return null; 
        } else{ 
            // guardo temporalmente el ultimo elemento en una variable
            const deletedElement = this.storage[this.count];
            // elimino ese ultimo elemento de mi pila
            delete this.storage[this.count];
            // disminuyo mi count 
            this.count--;
            // retorno el elemento que elimine.
            return deletedElement;
        }

    }
    length(){ //tamano de la pila 
        return this.count;

    }
    peek(){ //devuelve el ultimo elemento que agregue. 

        return this.storage[this.count];

    }
}

const miPila = new Stack();
console.log(miPila.push('federico2'));
console.log(miPila.push('alfredo2'));
console.log(miPila.push('alexis2'));
console.log(miPila.storage);

console.log(miPila.pop());
console.log(miPila.storage);

console.log(miPila.pop());
console.log(miPila.storage);

console.log(miPila.pop());
console.log(miPila.storage);


