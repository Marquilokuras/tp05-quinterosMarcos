//defino controlador para el manejo de CRUD
const ticketCtrl = require('../controllers/ticket.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de producto
router.post('/', ticketCtrl.createTicket); //Dar de alta un Ticket
router.get('/', ticketCtrl.getTicket); //Obtener todas los Tickets
router.delete('/:id', ticketCtrl.deleteTicket); //Eliminar un ticket
router.put('/:id',ticketCtrl.editTicket); //Modificar un ticket
router.get('/categoria', ticketCtrl.getObtenerEspectador); //Obtener UN Espectador
//exportamos el modulo de rutas
module.exports = router;