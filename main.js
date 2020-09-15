// let & const
const programa = { 
    nombre: "Master en Coding",
    sensei: "Mali", 
};

programa.sensei = "Maui";

console.log(programa);
// ------------------------
// Spread Operator

// cuando definimos la funcion
function master(programa, ...senseis) { 
  console.log(`Bienvenida a ${programa}`);
  console.log(`senseis: ${senseis[0]}, ${senseis[1]}, ${senseis[2]} y ${senseis[3]}`);
}

master("master en coding", "Mali", "Maui", "Gera", "Gustavo");

// cuando invocamos la funcion

function suma(x, y, z){ 
  console.log(x+y+z);
}

const numeros = [1, 2, 3];

suma(1, 2, 3);

suma(...numeros);

// ---------------------
// Arrow Functions

// manera tradicional
function suma2(a, b) { 
  return a + b;
}
console.log(suma2(1, 2));

// ES6
const resta = (a, b) => a - b;

console.log(resta(1, 7));

// cuando tenemos UN SOLO PARAMETRO es posible que no usemos los parentesis
const cuadrado = x =>  x++;
console.log(cuadrado(5));