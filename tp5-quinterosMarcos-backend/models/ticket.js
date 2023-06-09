const mongoose = require('mongoose');
const { Schema } = mongoose;
const Espectador = require('./espectador');
const TicketSchema = new Schema({
    precioTicket: { type: Number, required: true },
    categoriaEspectador: { type: String, enum: ['e', 'l'],  required: true },
    fechaCompra: { type: String, required: true },
    espectador: {type: Schema.Types.ObjectId, ref: Espectador, required: true } //: Espectador (Schema.Types.ObjectId)
})
module.exports = mongoose.models.Ticket || mongoose.model('Ticket', TicketSchema)