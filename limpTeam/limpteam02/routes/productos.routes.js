const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');


const crearProducto = (req, res, next)=>{
  res.render('crearProducto.ejs');
}

app.set('views', path.join(__dirname, 'views/'))
app.set('view engine', 'ejs');


module.exports =  crearProducto;