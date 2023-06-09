//defino controlador para el manejo de CRUD
const productoCtrl = require('./../controllers/producto.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de producto
router.get('/', productoCtrl.getProducto); //Recuperar TODOS los productos
router.post('/', productoCtrl.createProducto); //Dar de alta un Producto
router.get('/destacado', productoCtrl.getProductoDestacado); //Recuperar los productos DESTACADOS
router.put('/:id', productoCtrl.editProducto); //Modificar un producto 
router.delete('/:id', productoCtrl.deleteProducto); //Eliminar un producto
//exportamos el modulo de rutas
module.exports = router;