const { Router } = require('express');
const express = require('express');
const app = express();
const router = express.Router();


const connectDB = require('./db/database')


app.use('/', router)


router.get('/', (req, res) => {
    res.send('Bienvenidos!!!');
  });

router.get('/productos', (req, res) => {
    res.send('Bienvenidos a productos!!!');
  });

router.get('/clientes', (req, res) => {
    res.send('Bienvenidos a clientes!!!');
  });





app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
  });