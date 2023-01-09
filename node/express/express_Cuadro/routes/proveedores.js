var express = require('express');
let proveedoresDB = require('../db/db.js')
var router = express.Router();

const {crear, mostrar,modificar, eliminar} = require('../functions/functions.js')
/* GET home page. */
router.get('/', (req, res, next)=> {
  res.render('proveedores')
  //res.send(mostrar)
});

router.get('/', (req, res, next)=> {
    //res.render('proveedores')
    console.log(mostrar); 
    //res.send(mostrar)
  });



module.exports = router;