var express = require('express');
var router = express.Router();

const {crear, mostrar,modificar, eliminar} = require('../functions/functions.js')
/* GET home page. */
router.get('/', (req, res, next)=> {
  res.render('clientes')
  //res.send(mostrar)
});

module.exports = router;