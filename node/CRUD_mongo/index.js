const express = require('express');
const app = express();
const port = 3000

const dbConnect = require('./db/db.js')
const {crear, mostrar,modificar, eliminar} = require('./functions/functions.js')

app.get('/',(req,res)=>{
    res.send('Hola')
    res.send(mostrar)
});


app.listen(port, ()=>{
    console.log(`Escuchando en el puerto: ${port}`);
})




//crear();
//modificar('63b636cbdcacf200')
//eliminar('63b63683659de4a049581760')
//mostrar()