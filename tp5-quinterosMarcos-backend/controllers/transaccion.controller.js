const Transaccion = require('../models/transaccion');
const transaccionCtrl = {}

transaccionCtrl.getTransaccion = async (req, res) => { //se define una funcion asincrona
    var transacciones = await Transaccion.find();
    res.json(transacciones);
}

transaccionCtrl.createTransaccion = async (req, res) => {
    var transaccion = new Transaccion(req.body);

    const cantidadOrigen = Number(req.body.cantidadOrigen);
    const tasaConversion = Number(req.body.tasaConversion);
    const cantidadDestino = cantidadOrigen * tasaConversion;

    // Asigna la cantidad destino a la transacción
    transaccion.cantidadOrigen = cantidadDestino;
    transaccion.cantidadDestino = cantidadOrigen;
    try {
        await transaccion.save();
        res.json({
            'status': '1',
            'msg': 'Transaccion guardada.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

transaccionCtrl.getHistoricoTransacciones = async (req, res) => {
    try {
        const { emailCliente } = req.query;
        const historicoTransacciones = await Transaccion.find({ emailCliente });
        res.status(200).json(historicoTransacciones);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el historial de transacciones' });
    }
}

transaccionCtrl.getDivisasTransaccion = async (req, res) => {
    try {
        const { origen , destino } = req.query;
        const divisasTransacciones = await Transaccion.find({ monedaOrigen: origen, monedaDestino: destino });        
        res.status(200).json(divisasTransacciones);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el historial de transacciones' });
    }
}

module.exports = transaccionCtrl;
