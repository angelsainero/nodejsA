const mongoose=require('mongoose');

// definir el esquema de los agentes donde definimos las propiedades para que no se meta basura
const agenteSchema = mongoose.Schema({
    name: String,
    age: Number,
})

// crear el modelo de Agente
const Agente = mongoose.model('Agente', agenteSchema)

//exportar el modelo
module.exports = Agente;

