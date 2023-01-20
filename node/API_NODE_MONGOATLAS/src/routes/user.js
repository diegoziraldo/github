const express = require('express');
const router = express.Router();
const userSchema = require('../models/user.js')


//create user
router.post('/users',(req,res)=>{
    const user = userSchema(req.body);
        user
            .save()
            .then((data)=>res.json(data))
            .catch((err)=>res.json({message:err}))
})

//obtener todos los usuarios
router.get('/users', (req,res)=>{
    userSchema
        .find()
        .then((data)=>res.json(data))
        .catch((err)=>res.json({message:err}))
})

//obtener un usuario
router.get('/users/:id', (req,res)=>{
    const { id } = req.params
    userSchema
        .findById(id)
        .then((data)=>res.json(data))
        .catch((err)=>res.json({message:err}))
})

//modificar un usuario
router.put('/users/:id', (req,res)=>{
    const { id } = req.params
    const { name, age, email } = req.body

    userSchema
        .updateOne({_id: id}, { $set: {name, age, email}})
        .then((data)=>res.json(data))
        .catch((err)=>res.json({message:err}))
})

//Eliminar un usuario
router.delete('/users/:id', (req,res)=>{
    const { id } = req.params
    userSchema
        .remove({_id: id})
        .then((data)=>res.json(data))
        .catch((err)=>res.json({message:err}))
})




module.exports = router;