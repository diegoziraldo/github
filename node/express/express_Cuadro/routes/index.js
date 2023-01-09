var express = require('express');
var router = express.Router();

const {crear, mostrar,modificar, eliminar} = require('../functions/functions.js')

/* GET home page. */
//Aca vamos a recibir todo lo que nos manden desde el get
router.get('/', (req, res, next)=> {
  res.render('index')
  //console.log(crear());
  //res.send(mostrar)
});

//Aca vamos a recibir todo lo que nos manden desde el post
router.post('/crear', (req, res, next)=> {
  res.render('index')
  crear(req.body.name)
});

module.exports = router;
