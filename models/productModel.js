const mongoose = require('mongoose');
const productoSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true,
    },
    descripcion: {
        type: String,
        require: false,
    },
    precio: {
        type: Number,
        require: true,
    },
    stock: {
        type: Number,
        require: true,
    },
    imageUrl: {
    type: String,
    required: false,
    }
});
module.exports = mongoose.model('Producto', productoSchema);