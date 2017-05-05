"use strict";

const fs = require('fs');
const async = require('async');
const versionModulo = require('./versionModulo');

function versionModulos(callback) {
  // leer contenido de node_modules
  fs.readdir('./node_modules', (err, lista) => {
    if (err) {
      callback(err);
      return;
    }

    // sacar nombre y version de cada modulo que encontremos
    // esta función la vamos a ejecutar con cada elemento de la lista de directorios
    function iterador(item, callbackIterador) {
      
      // descartamos ficheros o carpetas que empiecen por .
      if (item[0] === '.') {
        callbackIterador(null); // no hace falta pasar el error si todo ha ido bien
        return;
      }

      versionModulo(item, (err, version) => {
        if (err) {
          callbackIterador(err);
          return;
        }

        callbackIterador(null, { nombre: item, version: version });
      });
    }

    // devolvemos la lista de modulos
    async.concat(lista, iterador, callback);

    // para hacer bucles que en su interior hagan cosas asíncronas
    // como por ejemplo trabajar con ficheros o la red,
    // NO usar bucles como estos:
    //  while() {...}
    //  for (var i = 0;...)
    //  lista.forEach(item => {      // no es asincrono

  })
}

versionModulos( (err, listaModulos) => {
  if (err) {
    console.error('Hubo un error', err);
    return;
  }
  // nos recorremos listaModulos para pintarlos en la consola
  // y como console.log no es asincrono, podemos hacer un bucle de toda la vida
  for (let i = 0; i < listaModulos.length; i++) {
    console.log('El módulo', listaModulos[i].nombre, 
      'tiene la versión', listaModulos[i].version);
  }

});