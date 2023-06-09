const Espectador = require('../models/espectador');
const espectadorCtrl = {}

espectadorCtrl.getEspectador = async (req, res) => { //se define una funcion asincrona
    var espectadores = await Espectador.find();
    res.json(espectadores);
}

espectadorCtrl.createEspectador = async (req, res) => {
    var espectador = new Espectador(req.body);
    try {
        await espectador.save();
        res.json({
            'status': '1',
            'msg': 'Espectador guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

espectadorCtrl.getObtenerEspectador = async (req, res) => {
    try {
        const { dni } = req.query;
        const obtenerEspectador = await Espectador.find({ dni });
        res.status(200).json(obtenerEspectador);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el historial de transacciones' });
    }
}

module.exports = espectadorCtrl;