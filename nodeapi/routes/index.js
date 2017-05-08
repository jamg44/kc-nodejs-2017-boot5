var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Recibiendo parámetros en la ruta
router.get('/paramenruta/:id', (req, res, next) => {
  console.log('req.params', req.params)
  res.send('ok recibido el id: ' + req.params.id);
});

router.get('/paramopcional/:dato?', (req, res, next) => {
  console.log('paramopcional', req.params);
  res.send('ok');
});

router.get('/param/:id([0-9]+)/piso/:piso/puerta/:puerta(A|B|C)', (req, res, next) => {
  console.log('varios paramns', req.params);
  res.send('ok');
});

// Recibiendo parámetros en la query-string
router.get('/enquerystring', (req, res, next) => {
  console.log('req.query', req.query);
  res.send('ok');
});

// Recibiendo parámetros en el body (cuerpo de la petición)
router.put('/enelbody', (req, res, next) => {
  console.log('req.body', req.body);
  res.send('ok en el body');
});

module.exports = router;
