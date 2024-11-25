const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/userModel');
require('dotenv').config();


const registro = async (req, res) => {
    const { usuario, password, telefono, direccion, rol } = req.body;

   
    if (!usuario || !password) {
        return res.status(400).json({ message: 'Faltan campos obligatorios' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new Usuario({ usuario, password: hashedPassword, telefono, direccion, rol});
        await user.save();
        res.status(201).json({ message: 'Usuario creado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el usuario', error });
    }
};


const inicioSesion = async (req, res) => {
    const { usuario, password } = req.body;

    
    if (!usuario || !password) {
        return res.status(400).json({ message: 'Faltan campos obligatorios' });
    }

    try {
        const user = await Usuario.findOne({ usuario });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Credenciales incorrectas' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ message: 'Autenticación exitosa', token });
    } catch (error) {
        res.status(500).json({ message: 'Error en la autenticación', error });
    }
};

module.exports = { registro, inicioSesion };