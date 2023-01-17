'use strict'
let express = require('express');
let { save, getArticles, remove } = require('../controllers/article.js');

//Llamamos al modelo router de express:
let router = express.Router();

//Rutas para los articulos
router.post('/save', save());
router.get('/articles', getArticles());
router.delete('/delete/:id', remove());

module.exports = router;
