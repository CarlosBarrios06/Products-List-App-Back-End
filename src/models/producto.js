const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productoSchema = new Schema({
    nombre: String,
    categoria: String,
    ubicacion: String,
    precio: Number,
})

module.exports = mongoose.model('Productos', productoSchema);