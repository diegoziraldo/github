const express = require('express')

const routerMatematicas = express.Router()

const {matematicas} = require('../datos/cursos.js').infoCursos


routerMatematicas.get('/', (req,res)=>{
    res.send(JSON.stringify(matematicas))
})

routerMatematicas.get('/:tema', (req,res)=>{
    const tema = req.params.tema; //Aca estamos obteniendo el valor que estamos enviando desde la url
   
    const resultados = matematicas.filter(curso=> curso.tema === tema);  //Aca estamos filtrando que si en el objeto 'curso', existe un valor igual al que le pasamos por el parametro este se va a guardar en la variable 'resultados' 
    if (resultados.length === 0) { //Aca vamos a verificar si el array resultados tiene algun valor si lo tiene los mostrara, y si no mostrara un estado 404
        return res.status(404).send(`No se encontraron cursos de ${tema}`)
    }
    else{

        res.send(JSON.stringify(resultados))
    }
})

module.exports = routerMatematicas;