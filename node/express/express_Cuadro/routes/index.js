var express = require('express');
var router = express.Router();

const {crear, mostrar,modificar, eliminar} = require('../functions/functions.js')

/* GET home page. */
router.get('/', (req, res, next)=> {
  res.render('index')
  //res.send(mostrar)
});

router.post('/mostrar', (req, res, next)=> {
  //res.render('index')
  console.log(mostrar());
  //res.send(mostrar)
});

router.post('/crear', (req, res, next)=> {
  res.render('index')
  crear(req.body.name)
});

module.exports = router;
