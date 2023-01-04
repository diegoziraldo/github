const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1/mongoCurso'

mongoose.connect(url)
.then(()=>{
    console.log('Conectado a mongoDB');
})
.catch((e)=>console.log('error de coneccion ' + e));




const clienteSchema = mongoose.Schema({
    nombre: String
})

const ClienteModel = mongoose.model('cliente', clienteSchema)


//Funcion crear
const crear = async()=>{
    const cliente = new ClienteModel({
        nombre: "Diego"
    }) 
    const resultado = await cliente.save()
}

//Funcion mostrar
const mostrar = async()=>{
    const cliente = await ClienteModel.find()
    console.log(cliente);
}

//Funcion modificar
const modificar = async(id)=>{
    const cliente = await ClienteModel.updateOne({_id:id},
    {
        $set:{
            nombre:"yani"
        }
    })
}

//Funcion borrar
const eliminar = async(id)=>{
    const cliente = await ClienteModel.deleteOne({_id:id})
    console.log(cliente);
}



//crear()
//modificar('63b22db6d9b1154da48302e0')
eliminar('63b237728d6ff844efb45523')

mostrar()