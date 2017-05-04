"use strict";

const fs = require('fs');
const path = require('path');

function versionModulo(nombreModulo, callback) {

  const fichero = path.join('./node_modules', nombreModulo, 'package.json'); 

  // Leemos contenido de un fichero package.json
  fs.readFile(fichero, 'utf-8', (err, data) => {
    // en el scope: fs, path, fichero, er, data
    if (err) {
      callback(err);
      return;
    }

    try {

      // parsear el contenido del fichero convirtiendo en un objeto
      var packageJson = JSON.parse(data);

    } catch (err) {
      callback(err);
      return;
    }
    ///console.log(packageJson);

    // obtenemos la version
    const version = packageJson.version || '';

    // retornamos la version
    callback(null, version);

  });

}

versionModulo('chance', (err, data) => {
  if (err) {
    console.error('Hubo un error', err);
    return;
  }
  console.log('La versión de chance es:', data);
});