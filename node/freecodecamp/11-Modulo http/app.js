const http = require('http');


const servidor = http.createServer((req,res)=>{ //Aca estamos creando un servidor este recibira y enviara datos al navegador (cliente).
    res.end('Hola')

});

const PUERTO = 3000;

servidor.listen(PUERTO,()=>{  //Con el metodo listen(), vamos a escuchar lo que nos manden desde el navegador por el puerto de finido, en este caso el puerto 3000
    console.log(`Estoy escuchando en el puerto ${PUERTO}`);
})


