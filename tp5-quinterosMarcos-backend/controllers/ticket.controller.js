const Ticket = require('../models/ticket');
const ticketCtrl = {}

ticketCtrl.getTicket = async (req, res) => { //se define una funcion asincrona
    var tickets = await Ticket.find().populate('espectador');
    res.json(tickets);
}

ticketCtrl.createTicket = async (req, res) => {
    var ticket = new Ticket(req.body);
    try {
        await ticket.save();
        res.json({
            'status': '1',
            'msg': 'Ticket guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

ticketCtrl.editTicket = async (req, res) => {
    try {
        const { id } = req.params;
        req.body;
        await Ticket.findByIdAndUpdate( { _id: id },req.body, {new: true,});
      
        res.json({
            status: '1',
            msg: 'Ticket Modifiado'
        });

    } catch (err) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
};

ticketCtrl.deleteTicket = async (req, res) => {
    try {
        await Ticket.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'Ticket eliminado'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

ticketCtrl.getObtenerEspectador = async (req, res) => {
    try {
        const { categoriaEspectador } = req.query;
        const espectadoresCategoria = await Ticket.find({ categoriaEspectador }).populate('espectador');
        res.status(200).json(espectadoresCategoria);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener espectador' });
    }
}

module.exports = ticketCtrl;