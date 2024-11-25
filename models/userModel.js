const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    usuario: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    telefono: {
        type: Number,
        require: false,
    },
    direccion: {
        type: String,
        require: true,
    },
    rol: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
}, { timestamps: true }); 

module.exports = mongoose.model('Usuario', UsuarioSchema);