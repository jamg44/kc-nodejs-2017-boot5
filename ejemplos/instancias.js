"use strict";

// creamos una función para usarla como constructor de objetos
function Fruta(nombre){

  this.nombre = nombre;

  // usamos this para poner cosas al objeto que se creará
  this.setNombre = function(valor) {
    this.nombre = valor;
  };

  this.getNombre = function() {
    return this.nombre;
  }
}

// creamos un objeto con el constructor
const limon = new Fruta('limon');

console.log(limon);

console.log(limon.getNombre());

limon.setNombre('naranja');

console.log(limon.getNombre());