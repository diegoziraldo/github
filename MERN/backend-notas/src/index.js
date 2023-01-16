'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express();
const port = 3000;

//body-parser, es un middleware para analizar cuerpos a traves de la url.
app.use(bodyParser.urlencoded({extended: false}))

//Cualquier petision la convertimos a json.
app.use(bodyParser.json());

//Activamos el CORS para permitir las peticiones AJAX y HTTP desde el frontend.
app.use((req,res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Autorization, X-API-KEY, X-Requested, Content-type, Accept, Access-Control-Allow-Request-Method')
    res.header('Access-Control-Allow-Methods', 'GET, POST,OPTIONS,PUT,DELETE')
    res.header('Allow', 'GET, POST,OPTIONS,PUT,DELETE')
    next();

})





app.listen(port,()=>{
    console.log(`Se esta ejecutando en el puerto: ${port}`);
})

