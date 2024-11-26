const express = require('express');

const router = express.Router();

const { registro, inicioSesion } = require('../controllers/userController');

/**
 * @swagger
 * components:
 *  schemas:
 *    Registro:
 *      type: object
 *      properties:
 *        usuario:
 *          type: integer
 *          description: El nombre de usuario
 *        password:
 *          type: string
 *          description: Contraseña
 *        teléfono:
 *          type: string
 *          format: date
 *          description: Numero de telefono
 *        direccion:
 *          type: string
 *          format: date
 *          description: La direccion del usuario
 *        rol:
 *          type: string
 *          description: Ocupacion
 *      required:
 *        - usuario
 *        - password
 *        - telefono
 *        - direccion
 *        - rol
 *      example:
 *        usuario: "Juanito"
 *        password: "12345678"
 *        telefono: "+56965789420"
 *        direccion: "Los Alpes Villa Los Andes"
 *        rol: user
 */

/**
 * @swagger
 * /api/user/registro:
 *  post:
 *    summary: Crear nuevo Usuario
 *    tags: [Registro]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Registro'
 *    responses:
 *      201:
 *        description: Usuario creado satisfactoriamente
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Registro'
 */
router.post("/registro", registro);

/**
 * @swagger
 *  /api/user/inicioSesion:
 *  post:
 *    summary: Inicio de Sesión
 *    tags: [InicioSesion]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/inicioSesion'
 *    responses:
 *      201:
 *        description: Inicio realizado satisfactoriamente
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/inicioSesion'
 */
router.post("/inicioSesion", inicioSesion);

module.exports = router;