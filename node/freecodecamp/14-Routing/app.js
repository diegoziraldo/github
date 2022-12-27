const http = require('http');
const cursos = require('./cursos.js')



const servidor = http.createServer((req,res)=>{ //Aca estamos creando un servidor este recibira y enviara datos al 
    const {method} = req;

    switch (method) {
        case 'GET':
            return manejarSolicitudGET(req,res);
        case 'post':
            return manejarSolicitudPOST(req,res);
        
        default:
            console.log(`El metodo no puede ser manejado ${method}`);
            
    }

});

const manejarSolicitudGET = (req, res)=>{
    const path = req.url;

    if (path === '/') {
        res.statusCode = 200;
        res.end('Primer Servidor de node.JS')
    } else if(path === '/cursos'){
        res.statusCode = 200;
        res.end(JSON.stringify(cursos.infoCursos))
    } else if(path === '/cursos/programacion'){
        res.statusCode = 200;
        res.end(JSON.stringify(cursos.infoCursos.programacion))
    }
    else{
        res.statusCode = 404;
        res.end('El recurso no existe')
    }
};

const manejarSolicitudPOST = (req, res)=>{
    const path = req.url;

    if (condition) {
        
    } else {
        
    }
}

const PUERTO = 3000
servidor.listen(PUERTO, ()=>{
    console.log(`El servidor esta escuchando en el puerto: ${PUERTO}`);
})