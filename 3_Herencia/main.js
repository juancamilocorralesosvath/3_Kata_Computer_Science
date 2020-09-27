// Superclase / clase padre

class Mascota{ 
    constructor(nombre, patas){ 
      
        this.nombre = nombre;
        this.patas = patas;
    }

    comer(){ 
        return `a ${this.nombre} le gusta comer monda`;
    }
}



// subclase / clase hija
class Gato extends Mascota{

    constructor(nombre, patas, colorOjos){ 
        super(nombre, patas);
        this.colorOjos = colorOjos;
        this.vidas = 7;
    }
    ronronear(){ 
        return "prrrrr";
    }
}
const gato = new Gato("petronio", 4);
console.log(gato);
console.log(gato.comer());
console.log(gato.ronronear());

class Camaleon extends Mascota{ 
    constructor(nombre, patas){
        super(nombre, patas); 
        this.color = 'verde';

    }
    cambiaColor(nuevoColor){ 
      this.color = nuevoColor;
    }
}

const camaleon = new Camaleon('Rango', 4);
console.log(camaleon);
camaleon.cambiaColor("rojo");
console.log(camaleon.comer());
camaleon.cambiaColor('rojo');
console.log(camaleon);

