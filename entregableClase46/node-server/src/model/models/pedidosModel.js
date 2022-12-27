const mongoose = require('mongoose')
const {Schema, model} = mongoose


const PedidoSchema = new Schema({
    userId: {type: String, required: true},
    nombre: {type: String},
    email: {type: String},
    items: {type: Array, required: true, default: []},
    precioTotal: {type: Number},
    direccion: {type: String}
}, 
{
  timestamps: true,
  strictQuery: "throw"
}
);



  
  
const PedidosModel = model('pedidos', PedidoSchema);


module.exports = {PedidosModel, PedidoSchema}


// ver si se puede definir un schema para los productos dentro del array