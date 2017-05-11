"use strict";

// funcion que retorna una promesa
function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve();
      reject('fatal');
    }, ms);
  });
}

console.log('empiezo');

const promesa = sleep(5000);

promesa.then(() => {
  console.log('termino');
}).catch(err => {
  console.log('Hubo un error:', err);
});
