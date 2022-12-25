const http = require('http');


const servidor = http.createServer((req,res)=>{ //Aca estamos creando un servidor este recibira y enviara datos al navegador (cliente).

//Objeto require
/*  console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    res.end(req.url) */

//Objeto respuesta
    console.log(res.statusCode);

    res.end(statusCode)
});

const puerto = 3000

servidor.listen(puerto, ()=>{
    console.log(`El servidor esta escuchando en el puerto: ${puerto}`);
})