'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const test = require('./controllers/article')
const mongoose = require('mongoose');

const article_routes = require('./routes/article');



const app = express();
const port = 3001;

let url = 'mongodb+srv://diegoziraldo:1234@cluster0.7yxf0um.mongodb.net/test';

let articleRoutes = require('./routes/article');

app.get('/',(req,res)=>{
    res.send('Index')
})


mongoose.Promise = global.Promise;  //Con esta linea evitaremos problemas en la conexion de la base de datos.



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

app.use('/api', articleRoutes);

mongoose.set('strictQuery', true);
mongoose.connect(url, {useNewUrlParser:true}).then(()=>{
    console.log('conexion exitosa');
    app.listen(port,()=>{
        console.log(`Se esta ejecutando en el puerto: ${port}`);
    });
})




