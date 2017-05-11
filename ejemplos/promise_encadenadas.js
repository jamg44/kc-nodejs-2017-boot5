"use strict";

// Funciones que devuelven promesas

function conArroz(plato) {
  return new Promise((resolve, reject) => {
    resolve(plato + ' arroz');
  });
}

function conAjo(plato) {
  return new Promise((resolve, reject) => {
    //resolve(plato + ' ajo');
    reject('fatal');
  });
}

function con(plato, ingrediente) {
  return new Promise((resolve, reject) => {
    resolve(plato + ' ' + ingrediente);
  });
}

// encadenar promesas

const paella = 'paella con';

conArroz(paella)
  .then((plato) => { 
    console.log(plato);
    return plato;
  })
  .then(conAjo) // conAjo recibe el plato que devolvio conArroz
  .then((plato) => {
    return con(plato, 'sal');
  })
  .then((plato) => {
    console.log(plato);
  })
  .catch(err => {
    console.log('Hubo un error', err);
  });
  