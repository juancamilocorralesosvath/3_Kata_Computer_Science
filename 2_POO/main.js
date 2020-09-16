/* Pascal Case: empezar el nombre de las variables con mayuscula, que por lo general se usa con clases */
class Animal{
  constructor(nombre, especie, numPatas){
      this.nombre = nombre;
      this.especie = especie;
      this.numPatas = numPatas;

  }
}

const firulais = new Animal("Ayudante de Santa", "Perro", "4");

console.log(firulais);