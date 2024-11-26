const express = require('express');
const router = express.Router();
 
const { leerTodo, leerUno, crear, actualizar, borrar } = require('../controllers/productController');
 
/**
 * @swagger
 * components:
 *  schemas:
 *    Producto:
 *      type: object
 *      properties:
 *        nombre:
 *          type: string
 *          description: El nombre del producto
 *        descripcion:
 *          type: string
 *          description: Contraseña
 *        precio:
 *          type: integer
 *          description: Precio del producto
 *        stock:
 *          type: integer
 *          description: Cantidad disponible
 *        imageUrl:
 *          type: string
 *          description: Imagen del producto
 *      required:
 *        - nombre
 *        - descripcion
 *        - precio
 *        - stock
 *        - imageUrl
 *      example:
 *        nombre: "Bolso"
 *        descripcion: "Bolso Deportivo"
 *        precio: 20990
 *        stock: "10"
 *        imageUrl: "Imagen"
 */

/**
 * @swagger
 * /api/product/crear:
 *  post:
 *    summary: Crear nuevo Producto
 *    tags: [Producto]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Producto'
 *    responses:
 *      200:
 *        description: Producto creado satisfactoriamente
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Producto'
 */
router.post("/crear", crear);

/**
 * @swagger
 * /api/product/leertodo:
 *  get:
 *    summary: Leer todo
 *    tags: [Producto]
 *    responses:
 *      200:
 *        description: Todos los productos listados con éxito
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Producto'
 */
router.get("/leertodo", leerTodo);

/**
 * @swagger
 * /api/product/leeruno/{id}:
 *  get:
 *    summary: Leer un producto
 *    tags: [Producto]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Obtener información de una reserva específica
 *     responses:
 *      200:
 *        description: Producto Leido con exito
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Producto'
 */
router.get("/leeruno/:id", leerUno);

/**
 * @swagger
 * /api/product/actualizar/{id}:
 *  put:
 *    summary: Actualizar Productos
 *    tags: [Producto]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Obtener información de una reserva específica
 *    responses:
 *      200:
 *        description: Actualizar listado de productos
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Producto'
 */
router.put("/actualizar/:id", actualizar);

/**
 * @swagger
 * /api/product/borrar/{id}:
 *  delete:
 *    summary: Borar producto
 *    tags: [Producto]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Obtener información de una reserva específica
 *    responses:
 *      200:
 *        description: Producto borrado con éxito
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Producto'
 */
router.delete("/borrar/:id", borrar);
 
module.exports = router;