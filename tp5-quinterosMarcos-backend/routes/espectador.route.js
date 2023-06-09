//defino controlador para el manejo de CRUD
const espectadorCtrl = require('../controllers/espectador.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de producto
router.post('/', espectadorCtrl.createEspectador); //Dar de alta una Espectador 
router.get('/', espectadorCtrl.getEspectador); //Obtener todas los Espectadores
router.get('/dni', espectadorCtrl.getObtenerEspectador); //Obtener UN Espectador

//exportamos el modulo de rutas
module.exports = router;