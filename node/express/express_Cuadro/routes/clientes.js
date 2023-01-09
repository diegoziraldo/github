var express = require('express');
let clientesDB = require('../db/db.js')
var router = express.Router();



const {crear, mostrar,modificar, eliminar} = require('../functions/functions.js')

/* GET home page. */
router.get('/', (req, res, next)=> {
    res.render('clientes')
    console.log(mostrar);

});



module.exports = router;