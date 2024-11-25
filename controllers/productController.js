const Producto = require('../models/productModel');

const crear = async (req, res) => {
    try {
      const { nombre, descripcion, precio, stock, imageUrl } = req.body;
 
      const nuevoProducto = await Producto.create({ nombre, descripcion, precio, stock, imageUrl });
      res.json(nuevoProducto);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'error creando un producto' });
    }
  };

const leerTodo = async (req, res) => {
    try {
        const products = await Producto.find({});
        res.json({ products });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: 'error obteniendo los productos', error });
    }
};

const leerUno = async (req, res) => {
    try {
    const product = await Producto.findById(req.params.id);
    res.json({ product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'error obteniendo el producto' });
  }
};

const actualizar = async (req, res) => {
    try {
      const { nombre, descripcion, precio, stock, imageUrl } = req.body;
 
      const productoActualizado = await Producto.findByIdAndUpdate(req.params.id, { nombre, descripcion, precio, stock, imageUrl }, { new:true });
      res.json(productoActualizado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'error actualizando un producto' });
    }
  };

const borrar = async (req, res) => {
    try {
      const productoBorrado = await Producto.findByIdAndDelete(req.params.id);
      res.json(productoBorrado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'error borrando un producto' });
    }
  };

  module.exports = { leerTodo, leerUno, crear, actualizar, borrar };