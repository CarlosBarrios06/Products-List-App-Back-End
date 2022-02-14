const express = require('express');
const userSchema = require('../models/producto')


const router = express.Router();

//create product

router.post('/productos/crear', (req, res) => {
    console.log(req.body)
    const user = userSchema(req.body);    
    user
        .save()
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            res.json({ message: error })
        })
})


router.get('/productos', (req, res) => {
    userSchema
        .find()
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            res.json({ message: error })
        })
})


router.get('/productos/:id', (req, res) => {
    const {id} = req.params;
    userSchema
        .findById(id)
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            res.json({ message: error })
        })
})


router.put('/productos/:id', (req, res) => {
    const {id} = req.params;
    const {nombre, categoria, ubicacion, precio} = req.body;
    userSchema
        .updateOne({_id:id},{$set: {nombre, categoria, ubicacion, precio}})
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            res.json({ message: error })
        })
})

router.delete('/productos/:id', (req, res) => {
    const {id} = req.params;
    userSchema
        .remove({_id:id})
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            res.json({ message: error })
        })
})

module.exports = router