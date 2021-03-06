"use strict";

console.log('empiezo');

// funcion que escribe un texto en la consola tras dos segundos
function escribeTras2Segundos(texto, callback) {
  setTimeout(function() {
    console.log(texto);
    callback();
  }, 2000);
}

// utilizamos la funcion
escribeTras2Segundos('texto1', function() {
  // y cuando termina, llamamos a la funcion de nuevo
  escribeTras2Segundos('texto2', function() {
    escribeTras2Segundos('texto3', function() {
      console.log('fin');
    });
  });
});
