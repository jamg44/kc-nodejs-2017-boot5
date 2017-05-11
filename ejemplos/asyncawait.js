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

async function main() {
  console.log('empiezo');
  
  // el catch final recoje tambien los errores síncronos
  //throw new Error('asadasdas');

  await sleep(2000); // el código se para aqui hasta que se completa la
                     // promesa
  for (let i = 0; i < 5; i++) {
    await sleep(1000);
    console.log('pasó un segundo');
  }
  console.log('terminado');
}

main().then(() => {})
      .catch(err => {
        console.log('Hubo un error:', err);
      })