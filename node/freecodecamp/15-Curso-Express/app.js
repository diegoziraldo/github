const {infoCursos} = require ('./datos/cursos.js'); 
const express = require('express');


const app = express();

//Routers
const routerProgramacion = require('./routers/programacion.js')
app.use('/api/cursos/programacion', routerProgramacion) //Aca estamos seteando un router, de esta manera podremos acortar las url de los metodos.
const routerMatematicas = require('./routers/matematicas.js')
app.use('/api/cursos/matematicas', routerMatematicas)

//Routing
app.get('/', (req,res)=>{
    res.send('Index')
});

app.get('/api/cursos', (req,res)=>{
    res.send(JSON.stringify(infoCursos))
})






const PUERTO = process.env.PORT || 3000;
app.listen(PUERTO,()=>{
    console.log('Servido andando');
})