const {ClienteModel} = require('../Schema/schema.js');

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
            nombre:"Ziraldo"
        }
    })
}

//Funcion borrar
const eliminar = async(id)=>{
    const cliente = await ClienteModel.deleteOne({_id:id})
    console.log(cliente);
}




module.exports = {crear, mostrar, modificar, eliminar}
