const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/user')

require('dotenv').config();

const port = process.env.PORT || 3000;

//middleware
//Con este middleware podremos ponerle un prefijo a la ruta.
app.use('/api', userRoutes)



//routes
app.get('/',(req,res)=>{
  res.send('index')
})

//mongodb
mongoose
  .connect(process.env.MONGODB_URI)
  .then(()=>console.log('Conexion exitosa MongoDB ATLAS'))
  .catch((err)=>console.log(error));

app.listen(port, ()=>{
    console.log(`servidor andando en ${port}`);
})