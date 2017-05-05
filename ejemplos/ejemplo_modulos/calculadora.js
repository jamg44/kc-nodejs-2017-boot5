"use strict";

console.log('Modulo calculadora se esta inicializando...');
console.log('Ya esta!')

module.exports.suma = function (a, b) {
  return a + b;
}

module.exports.resta = function (a, b) {
  return a - b;
}

// exports es un objeto vacio al que voy añadiendo cosas

// si usamos el alias (sin module. a la izquierda) numca 
// le podemos asignar nada porque rompemos el alias
exports.multiplica = {};
