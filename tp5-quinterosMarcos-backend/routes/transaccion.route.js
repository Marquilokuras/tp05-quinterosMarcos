//defino controlador para el manejo de CRUD
const transaccionCtrl = require('../controllers/transaccion.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de producto
router.post('/', transaccionCtrl.createTransaccion); //Dar de alta una Transaccion
router.get('/', transaccionCtrl.getTransaccion); //Recuperar TODAS las Transacciones Registradas
router.get('/email', transaccionCtrl.getHistoricoTransacciones); //Recuperar el histórico de transacciones de un determinado cliente
router.get('/divisas', transaccionCtrl.getDivisasTransaccion); //Recuperar TODAS las Transacciones que tengan como origen y destino las divisas

//exportamos el modulo de rutas
module.exports = router;