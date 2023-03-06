const mongoose = require('mongoose');

const Schema = mongoose.Schema

const productSchema = Schema({
    name: String,
    id: Number,
    unitaryPrice: Number,
    imgUrl: String,
    description:String
},{
    timestamps: true
})

productSchema.methods.setImgUrl = function setImgUrl(){
    
}


module.exports = mongoose.model('Products', productSchema)