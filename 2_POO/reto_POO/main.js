class Persona{ 

    constructor(nombre, apellido, edad, sexo, peso, altura){ 
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(){ 
        /* IMC = Peso (kg) / altura (m)2 */

        return `tu IMC es de ${this.peso / (this.altura * this.altura)}`

    }

    esMayorDeEdad(){ 

    }
    generarID(){ 

    }
}

const juan = new Persona("Juan", "Corrales", 18, "Male", 60, 1.75);

console.log(juan.calcularIMC());