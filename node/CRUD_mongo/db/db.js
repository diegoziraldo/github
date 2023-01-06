const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1/mongoCurso'

const dbConnect = mongoose.connect(url)

.then(()=>{
    console.log('Conectado a mongoDB');
})
.catch((e)=>console.log('error de coneccion ' + e));


module.exports.dbConnect = dbConnect;