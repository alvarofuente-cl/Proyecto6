const express = require('express');
const router = express.Router();
 
const { leerTodo, leerUno, crear, actualizar, borrar } = require('../controllers/productControllers');
 
router.post("/crear", crear);
router.get("/leertodo", leerTodo);
router.get("/leeruno/:id", leerUno);
router.put("/actualizar/:id", actualizar);
router.delete("/borrar/:id", borrar);
 
module.exports = router;