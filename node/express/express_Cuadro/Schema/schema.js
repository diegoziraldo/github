const mongoose = require('mongoose');

const clienteSchema = mongoose.Schema(
    {
    nombre: String
    }
)

//Creando el modelo
const ClienteModel = new mongoose.model('cliente', clienteSchema)


module.exports.ClienteModel = ClienteModel;