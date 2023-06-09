const Producto = require('../models/producto');
const productoCtrl = {}

productoCtrl.getProducto = async (req, res) => { //se define una funcion asincrona
    var productos = await Producto.find();
    res.json(productos);
}

productoCtrl.createProducto = async (req, res) => {
    var producto = new Producto(req.body);
    try {
        await producto.save();
        res.json({
            'status': '1',
            'msg': 'Producto guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

productoCtrl.getProductoDestacado = async (req, res) => {
    try {
        const producto = await Producto.find({ destacado : true });
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el historial de transacciones' });
    }
}

productoCtrl.editProducto = async (req, res) => {
   try {
        const { id } = req.params;
        req.body;
        await Producto.findByIdAndUpdate( { _id: id },req.body, {new: true,});
      
        res.json({
            'status': '1',
            'msg': 'Producto modificado'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

productoCtrl.deleteProducto = async (req, res) => {
    try {
        await Producto.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'Producto eliminado'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

module.exports = productoCtrl;
